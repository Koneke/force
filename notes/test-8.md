2026-02-05 1853Z

# Introductory notes

Alright, so, first test post the big green revamp ([commit](https://github.com/Koneke/force/commit/198e065f139ddfd052bc2654792b62fb7ea12149)). Long story short, we have essentially killed the concept of saplings in green, to instead replace it with more neighbour effects, more trample, and the concept of shift, which lets you as part of playing a creature, shuffle another one back to deck from field to gain some effect (the new one has to be played in the same cell). So, this is a stress test, to see if green works more conceptually now. We're probably going to need a couple of games, but yeah, the key goal is just "does green still have dead cards in hand or no". _Hopefully_, if I did this better this time, green's cards can now be good in a vacuum (not counting e.g. color identity concepts like neighbouring, which is still relevant). If this works, maybe we'll tweak a bit back and forth, and/or experiment with Chain as a concept (Chain X: do Y if this creature is part of a "chain" of 3 or more neighbouring creatures).

# Decks

p1: green test 4

creatures:
- 3x syl
- 3x breaker
- 3x fieldhand
- 3x composter
- 2x reclaimant
- 2x tender
- 2x reaper
- 2x nightwatchman
- 1x bloom

actions:
- 3x growth spurt
- 2x rampage
- 2x harvest
- 2x thornbite

= 30

p2: black test 3

creatures:
- 3x lastborn
- 3x vandal
- 2x dealer
- 2x security
- 2x triggerman
- 2x scav
- 2x enforcer
- 2x infiltrator
- 1x agitator
- 1x extortionist

actions:
- 2x diver
- 3x shady dealings
- 3x mercy kill
- 2x resuscitate

= 30

# Starting hands

p1:
- composter
- composter
- nightwatchman
- growth spurt
- growth spurt (dropped, no need for dupes)
- thornbite
- reclaimant (dropped)

p2:
- enforcer
- dealer
- mercy kill
- scav
- sadist
- security (dropped)
- resuscitate

# Game

## t1 p1
- rest
- add 2e to 2e
- no draw
- [p1] composter [1,1]
  > NOTE: still feels bad with 2e starting turn, but one thing at a time; let's do a green p2 after this
- pass

## t2 p2
- rest
- add 4e to 4e
- draw: vandal
- [p2] sadist [2,1] for 3e (to 1e)
- [p2] scav [2,2] for 1e (to 0e)
- [p2] scav [2,2] into face for 2
  > NOTE: nice little "don't you dare trade here play" with sadist up, but green also keeps the composter to shift over it
  - p1 at 13
- pass

## t3 p1
- rest
- add 4e to 4e
- draw: rampage
- [p1] spurt
  - composter [1,1] to 3/4 until end of turn
- [p1] thornbite
  - composter [1,1] fights sadist [2,1]
    - composter [1,1] to /3
    - sadist [2,1] dies
- [p1] composter [1,1] into face for 3
  - p2 at 12
- pass
- spurt on composter [1,1] ends
  - composter [1,1] back to 1/1

## t4 p2
- rest
- add 4e to 4e
- draw: diver
- [p2] dealer [2,2] for 3e (to 1e)
  - dealer [2,2]: etb, mill 2 (security, sadist), draw 1 (resuscitate)
- [p2] dealer into face for 2
  - p1 at 11
- [p2] scav into face for 2
  - p1 at 9

## t5 p1
- rest
- add 4e to 4e
- draw: fieldhand
- [p1] fieldhand [1,2] for 2e (to 2e)
- [p1] composter [1,1] (shift) for 2e (to 0e)
  - composter [1,1]: *shift*: to 2/3
  - fieldhand [1,2]: neighbour entered, draw 1 (harvest)
- [p1] composter [1,1] into face for 2
  - p2 at 10
- pass

## t6 p2
- rest
- add 4e to 5e
- draw: dealings
> NOTE: damn, like all black cards cost 2e
- [p2] vandal [2,3] for 2e (to 3e)
  - vandal [2,2]: etb, mill 2 (kill, lastborn)
- [p2] dealer into face for 2
  - p1 at 7
- [p2] scav into face for 2
  - p1 at 5
- [p2] vandal into face for 3
  - [p1] fieldhand [1,2] intercepts
    - both die
- [p2] mercy kill
  - composter [1,1] takes 3 and dies
- pass

## t7 p1
- rest
- add 4e to 4e
- draw: nightwatchman
> NOTE: oof, rough; 2x nightwatchman, 1x rampage, and a spring harvest that would just burn energy
- [p1] nightwatchman [1,1] for 4e (to 0e)
- pass

## t8 p2
- rest
- add 4e to 4e
- draw: scav
- [p2] scav [2,3] for 1e (to 3e)
- [p2] diver [2,4] for 2e (to 1e)
  - diver [2,4]: etb return lastborn from gy
- [p2] dealer [2,1] into face for 2
  - [p1] nightwatchman [1,1] intercepts
    - nightwatchman [1,1] dies
- [p2] scav [2,2] into face for 2
  - p1 at 3
- [p2] scav [2,3] into face for 2
  - p1 at 1
- [p2] diver [2,4] into face for 1
  - game over

# Exit notes

Okay, so, I'm feeling a lot less locked on green here, I have things I can play. I still think there are problems here, less value for the energy compared to black. But it feels more playable. I think a bunch of cards need to come down in price. Nightwatchman sticks out as a pricy one. I think this was a bit of bad luck too with no breaker draw, but still I think there's an overall issue of energy gain in the game. I am curious about trying the escalating energy over time idea, but one thing at a time.

Game was mostly just swinging back and forth, bit of removal, but more so just swing down, swing down, swing down. Might be on me. Alright, new game, green second.