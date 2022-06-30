with open ('butterfly-labels.txt','r') as foo:
  r = [x.split('\t') for x in foo.read().split('\n') if x != '']
  for x in r:
    if 'd_' not in x[2] and 'l_' not in x[2]: raise (ValueError('bad line: ' + str(x)))
  r = [[x[0],x[2][0].upper()+x[2][2:].lower()] for x in r]

A = list(set([x[1] for x in r]))
W = [x for x in A if x[0] == 'L']
D = [x for x in A if x[0] == 'D']
Q = {}
for xx in range(len(r)):
  x = r[xx]
  if x[1] not in Q: Q[x[1]] = []
  Q[x[1]].append(x + [xx])

print('''module Joyride.Scores.Ride.Base where

import Data.NonEmpty ((:|))
import Data.Array.NonEmpty (NonEmptyArray, fromNonEmpty)
''')
print('data ButterflyLyric =')
for x in range(len(W)): print((' | ' if x != 0 else '') + (' %s ' % W[x]))
print('data ButterflyDrum =')
for x in range(len(D)):
  print((' | ' if x != 0 else '') + (' %s ' % D[x]))

print('data Butterflyable = L ButterflyLyric | D ButterflyDrum')

print('l2s :: ButterflyLyric -> String')
for x in range(len(W)):
  print(('l2s %s = "%s"' % (W[x], W[x][1:])))


print('type TCID = { t :: Number, c :: Butterflyable, i :: Int, m :: MVal }')
print('data MVal =')
for x in range(len(r)):
  print((' | ' if x > 0 else ' ') + (' M%s' % (x,)))
print('')
print('m2tcid :: MVal -> TCID')
for x in range(len(r)):
  print(
        ('m2tcid M%s = {t: %s, c: %s %s, i: %d, m: M%s}' % (x, r[x][0], r[x][1][0], r[x][1], x, x)))
print('')
print('b2tcid :: Butterflyable -> NonEmptyArray TCID')
for x in Q.items():
  def mk(a,b,c):
    return ('m2tcid M%s' % (c,))
  print('b2tcid (%s %s) = fromNonEmpty (%s :| [%s])' % (x[0][0], x[0], mk(*x[1][0]), ','.join(mk(*y) for y in x[1][1:])))
print('')
print('score :: Array TCID')
print('score = [')
for x in range(len(r)):
  print ((' , ' if x > 0 else ' ') + ('m2tcid M%s' % (x,)))
print(' ]')