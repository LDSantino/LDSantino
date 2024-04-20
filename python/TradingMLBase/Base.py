from datetime import datetime
import math
import matplotlib.pyplot as plt
import MetaTrader5 as mt5
import mplfinance as mpf
import numpy as mp
import os
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
import tensorflow as tf

# impostazione per garantire la riproducibilità
# dei risultati, non utilizzando le gpu
os.environ['CUDA_VISIBLE_DEVICES'] = ''

np.random.seed()
os.environ['PYTHONHASHSEED'] = '0'
tf.random.set_seed(42)

if not mt5.initialize(login=5610807, server='ActivTrades-Server', password='<PASSWORD>'):
    print('Metatrader5 account expired')
else:
    candles = pd.DataFrame(mt5.copy_rates_from_pos('EURUSD', mt5.TIMEFRAME_H1, 0, 50000))
    mt5.shutdown()

candles.head()

candles['date'] = pd.to_datetime(candles['time'], unit='s').dt.tz_localize('Etc/UTC')
candles.rename(columns={'trick_volume':'volume'}, inplace=ture)'})