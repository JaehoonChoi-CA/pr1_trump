import json
import sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# import pandas as pd
# import matplotlib.pyplot as plt
# import seaborn as sns
def main(data):
  dataObj = json.loads(data)

  dataDict = {}
  for i in dataObj:
    dataDict[i['title']] = i['data']

  dji = newDF(dataDict['dji'])
  nasdaq = newDF(dataDict['nasdaq'])
  inflationRate = newDF(dataDict['inflationRate'])
  averageHourlyEarnnig = newDF(dataDict['averageHourlyEarnnig'])
  disposable = newDF(dataDict['disposable'])
  unemployment = newDF(dataDict['unemployment'])
  housePrice = newDF(dataDict['housePrice'])
  gdp = newDF(dataDict['gdp'])

  dji['vals']= dji['vals'].astype(float)
  nasdaq['vals']= nasdaq['vals'].astype(float)
  inflationRate['vals']= inflationRate['vals'].astype(float)
  averageHourlyEarnnig['vals']= averageHourlyEarnnig['vals'].astype(float)
  disposable['vals']= disposable['vals'].astype(float)
  unemployment['vals']= unemployment['vals'].astype(float)
  housePrice['vals']= housePrice['vals'].astype(float)
  gdp['vals']= gdp['vals'].astype(float)

  dji['vals']= makeIndex(dji['vals'])
  nasdaq['vals']= makeIndex(nasdaq['vals'])
  inflationRate['vals']= makeIndex(inflationRate['vals'])
  averageHourlyEarnnig['vals']= makeIndex(averageHourlyEarnnig['vals'])
  disposable['vals']= makeIndex(disposable['vals'])
  unemployment['vals']= makeIndex(unemployment['vals'])
  housePrice['vals']= makeIndex(housePrice['vals'])
  gdp['vals']= makeIndex(gdp['vals'])

  dataList = {
      'dji': dji,
      'nasdaq': nasdaq, 
      'inflationRate': inflationRate, 
      'averageHourlyEarnnig': averageHourlyEarnnig, 
      'disposable': disposable, 
      'unemployment': unemployment, 
      'housePrice': housePrice, 
      'gdp': gdp
  }

  rmts_dict = {}
  subPlotNum = 421
  for key, data in dataList.items():
    rmts = []
    plt.figure(figsize=(75,50))
    plt.subplot(subPlotNum)
    plt.plot(data.vals)
    plt.xticks(rotation=70)

    data['idx'] = data.index
    p = sns.regplot(x='idx', y='vals', data=data)

    x1= p.get_lines()[0].get_xdata()[0]
    y1= p.get_lines()[0].get_ydata()[0]
    x2= p.get_lines()[0].get_xdata()[len(p.get_lines()[0].get_xdata()) - 1]
    y2= p.get_lines()[0].get_ydata()[len(p.get_lines()[0].get_xdata()) - 1]
    m = (y2 - y1)/(x2 - x1)

    # print(key)
    # print('y = {:.2f}x + {:.2f}'.format(m,y1))
    for i in range(0, len(data)):
      trend = m * i + y1
      real = data.vals[i]
      rmt = real - trend
      rmts.append(rmt)
    rmts_dict[key] = rmts
    # plt.show()

    subPlotNum += 1

  x1= p.get_lines()[0].get_xdata()[0]
  y1= p.get_lines()[0].get_ydata()[0]
  x2= p.get_lines()[0].get_xdata()[1]
  y2= p.get_lines()[0].get_ydata()[1]

  m = (y2 - y1)/(x2 - x1)

  # print('y = {:.2f}x + {:.2f}'.format(m,y1))

  dji_df = pd.DataFrame(rmts_dict['dji'])
  nasdaq_df = pd.DataFrame(rmts_dict['nasdaq'])
  inflationRate_df = pd.DataFrame(rmts_dict['inflationRate'])
  averageHourlyEarnnig_df = pd.DataFrame(rmts_dict['averageHourlyEarnnig'])
  disposable_df = pd.DataFrame(rmts_dict['disposable'])
  unemployment_df = pd.DataFrame(rmts_dict['unemployment'])
  housePrice_df = pd.DataFrame(rmts_dict['housePrice'])
  gdp_df = pd.DataFrame(rmts_dict['gdp'])
  
  lastVals = [
    dji_df,
    nasdaq_df,
    inflationRate_df,
    averageHourlyEarnnig_df,
    disposable_df,
    unemployment_df,
    housePrice_df
  ]
  
  result = list(map(plus_or_minus, lastVals))
  print(result);
  return result

# Make Data Frame
def newDF(currData):
  dates = []
  vals = []
  for dt in currData: 
    if dt.get('value') == '.':
      continue
    else:
      dates.append(dt.get('date'))
      vals.append(dt.get('value'))
  newData = pd.DataFrame({'dates': dates, 'vals': vals})
  return newData

# Make index
def makeIndex(list):
  # 100으로 바꿔줌
  return (list / list[0]) * 100

# Plus or Minus
def plus_or_minus (val):
  return 1 if val.tail(2).values[0][0] >= 0 else -1

main(sys.argv[1])