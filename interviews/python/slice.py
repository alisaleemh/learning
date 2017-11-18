def show_balances(daily_balances):
  num_balances = len(daily_balances)
  for day in range(num_balances - 3,num_balances -1):
    print day
    balance_slice = daily_balances[day : day+2]
    print("slice starting %d days ago: %s" % (abs(day), balance_slice))

daily_balances = [1,2,3,4,5]

show_balances(daily_balances)
