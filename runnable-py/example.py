try:
  a = 12
  raise Exception('An error occurred')
except Exception as e:
  print(e)
finally:
  print('a value', a)