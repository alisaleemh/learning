#!/usr/bin/python3

N = 10
p = 2
q = 9

N = int(N)
p = int(p)
q = int(q)
NS = str(N)
pS = str(p)
qS = str(q)
final = []
for number in range(N+1):
    numberS = str(number)
    if number % p == 0 and number % q:
        if numberS in pS and numberS in qS:
            final.append("OUTTHINK")
        elif numberS not in pS and numberS not in qS:
            final.append("OUT")

        else:
            final.append(number)
print(final)
