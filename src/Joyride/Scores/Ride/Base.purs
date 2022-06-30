module Joyride.Scores.Ride.Base where

import Data.NonEmpty ((:|))
import Data.Array.NonEmpty (NonEmptyArray, fromNonEmpty)

data ButterflyLyric
  = Leyes
  | Lter
  | Lwan
  | Lso
  | Lna
  | Lwhen
  | Lflies
  | Lfan
  | Lta
  | Llive
  | Lskies
  | Lbout
  | Le
  | Lver
  | Lcan
  | Ldo
  | Lfill
  | Llies
  | Llna
  | Lclose
  | Li
  | Lyour
  | Lthat
  | Lto
  | Lthe
  | Lyes
  | Loh
  | Lbut
  | Ltake
  | Lwa
  | Lfeel
  | La
  | Lclosed
  | Lpen
  | Ljust
  | Lme
  | Lset
  | Lyou
  | Lo
  | Lsize

data ButterflyDrum
  = Dds
  | Dfuzz
  | Dclap
  | Dbd
  | Dsn
  | Dhh
  | Ddj
  | Dtm
  | Delec
  | Dcrunch

data Butterflyable = L ButterflyLyric | D ButterflyDrum
type TCID = { t :: Number, c :: Butterflyable, i :: Int, m :: MVal }
data MVal
  = M0
  | M1
  | M2
  | M3
  | M4
  | M5
  | M6
  | M7
  | M8
  | M9
  | M10
  | M11
  | M12
  | M13
  | M14
  | M15
  | M16
  | M17
  | M18
  | M19
  | M20
  | M21
  | M22
  | M23
  | M24
  | M25
  | M26
  | M27
  | M28
  | M29
  | M30
  | M31
  | M32
  | M33
  | M34
  | M35
  | M36
  | M37
  | M38
  | M39
  | M40
  | M41
  | M42
  | M43
  | M44
  | M45
  | M46
  | M47
  | M48
  | M49
  | M50
  | M51
  | M52
  | M53
  | M54
  | M55
  | M56
  | M57
  | M58
  | M59
  | M60
  | M61
  | M62
  | M63
  | M64
  | M65
  | M66
  | M67
  | M68
  | M69
  | M70
  | M71
  | M72
  | M73
  | M74
  | M75
  | M76
  | M77
  | M78
  | M79
  | M80
  | M81
  | M82
  | M83
  | M84
  | M85
  | M86
  | M87
  | M88
  | M89
  | M90
  | M91
  | M92
  | M93
  | M94
  | M95
  | M96
  | M97
  | M98
  | M99
  | M100
  | M101
  | M102
  | M103
  | M104
  | M105
  | M106
  | M107
  | M108
  | M109
  | M110
  | M111
  | M112
  | M113
  | M114
  | M115
  | M116
  | M117
  | M118
  | M119
  | M120
  | M121
  | M122
  | M123
  | M124
  | M125
  | M126
  | M127
  | M128
  | M129
  | M130
  | M131
  | M132
  | M133
  | M134
  | M135
  | M136
  | M137
  | M138
  | M139
  | M140
  | M141
  | M142
  | M143
  | M144
  | M145
  | M146
  | M147
  | M148
  | M149
  | M150
  | M151
  | M152
  | M153
  | M154
  | M155
  | M156
  | M157
  | M158
  | M159
  | M160
  | M161
  | M162
  | M163
  | M164
  | M165
  | M166
  | M167
  | M168
  | M169
  | M170
  | M171
  | M172
  | M173
  | M174
  | M175
  | M176
  | M177
  | M178
  | M179
  | M180
  | M181
  | M182
  | M183
  | M184
  | M185
  | M186
  | M187
  | M188
  | M189
  | M190
  | M191
  | M192
  | M193
  | M194
  | M195
  | M196
  | M197
  | M198
  | M199
  | M200
  | M201
  | M202
  | M203
  | M204
  | M205
  | M206
  | M207
  | M208
  | M209
  | M210
  | M211
  | M212
  | M213
  | M214
  | M215
  | M216
  | M217
  | M218
  | M219
  | M220
  | M221
  | M222
  | M223
  | M224
  | M225
  | M226
  | M227
  | M228
  | M229
  | M230
  | M231
  | M232
  | M233
  | M234
  | M235
  | M236
  | M237
  | M238
  | M239
  | M240
  | M241
  | M242
  | M243
  | M244
  | M245
  | M246
  | M247
  | M248
  | M249
  | M250
  | M251
  | M252
  | M253
  | M254
  | M255
  | M256
  | M257
  | M258
  | M259
  | M260
  | M261
  | M262
  | M263
  | M264
  | M265
  | M266
  | M267
  | M268
  | M269
  | M270
  | M271
  | M272
  | M273
  | M274
  | M275
  | M276
  | M277
  | M278
  | M279
  | M280
  | M281
  | M282
  | M283
  | M284
  | M285
  | M286
  | M287
  | M288
  | M289
  | M290
  | M291
  | M292
  | M293
  | M294
  | M295
  | M296
  | M297
  | M298
  | M299
  | M300
  | M301
  | M302
  | M303
  | M304
  | M305
  | M306
  | M307
  | M308
  | M309
  | M310
  | M311
  | M312
  | M313
  | M314
  | M315
  | M316
  | M317
  | M318
  | M319
  | M320
  | M321
  | M322
  | M323
  | M324
  | M325
  | M326
  | M327
  | M328
  | M329
  | M330
  | M331
  | M332
  | M333
  | M334
  | M335
  | M336
  | M337
  | M338
  | M339
  | M340
  | M341
  | M342
  | M343
  | M344
  | M345
  | M346
  | M347
  | M348
  | M349
  | M350
  | M351
  | M352
  | M353
  | M354
  | M355
  | M356
  | M357
  | M358
  | M359
  | M360
  | M361
  | M362
  | M363
  | M364
  | M365
  | M366
  | M367
  | M368
  | M369
  | M370
  | M371
  | M372
  | M373
  | M374
  | M375
  | M376
  | M377
  | M378
  | M379
  | M380
  | M381
  | M382
  | M383
  | M384
  | M385
  | M386
  | M387
  | M388
  | M389
  | M390
  | M391
  | M392
  | M393
  | M394
  | M395
  | M396
  | M397
  | M398
  | M399
  | M400
  | M401
  | M402
  | M403
  | M404
  | M405
  | M406
  | M407
  | M408
  | M409
  | M410
  | M411
  | M412
  | M413
  | M414
  | M415
  | M416
  | M417
  | M418
  | M419
  | M420
  | M421
  | M422
  | M423
  | M424
  | M425
  | M426
  | M427
  | M428
  | M429
  | M430
  | M431
  | M432
  | M433
  | M434
  | M435
  | M436
  | M437
  | M438
  | M439
  | M440
  | M441
  | M442
  | M443
  | M444
  | M445
  | M446
  | M447
  | M448
  | M449
  | M450
  | M451
  | M452
  | M453
  | M454
  | M455
  | M456
  | M457
  | M458
  | M459
  | M460
  | M461
  | M462
  | M463
  | M464
  | M465
  | M466
  | M467
  | M468
  | M469
  | M470
  | M471
  | M472
  | M473
  | M474
  | M475
  | M476
  | M477
  | M478
  | M479
  | M480
  | M481
  | M482
  | M483
  | M484
  | M485
  | M486
  | M487
  | M488
  | M489
  | M490
  | M491
  | M492
  | M493
  | M494
  | M495
  | M496
  | M497
  | M498
  | M499
  | M500
  | M501
  | M502
  | M503
  | M504
  | M505
  | M506
  | M507
  | M508
  | M509
  | M510
  | M511
  | M512
  | M513
  | M514
  | M515
  | M516
  | M517
  | M518
  | M519
  | M520
  | M521
  | M522
  | M523
  | M524
  | M525
  | M526
  | M527
  | M528
  | M529
  | M530
  | M531
  | M532
  | M533
  | M534
  | M535
  | M536
  | M537
  | M538
  | M539
  | M540
  | M541
  | M542
  | M543
  | M544
  | M545
  | M546
  | M547
  | M548
  | M549
  | M550
  | M551
  | M552
  | M553
  | M554
  | M555
  | M556
  | M557
  | M558
  | M559
  | M560
  | M561
  | M562
  | M563
  | M564
  | M565
  | M566

m2tcid :: MVal -> TCID
m2tcid M0 = { t: 0.032195, c: L Lset, i: 0, m: M0 }
m2tcid M1 = { t: 0.393672, c: D Dbd, i: 1, m: M1 }
m2tcid M2 = { t: 1.402264, c: D Ddj, i: 2, m: M2 }
m2tcid M3 = { t: 1.924536, c: D Dbd, i: 3, m: M3 }
m2tcid M4 = { t: 3.459156, c: D Dclap, i: 4, m: M4 }
m2tcid M5 = { t: 4.467928, c: D Dbd, i: 5, m: M5 }
m2tcid M6 = { t: 5.483853, c: D Ddj, i: 6, m: M6 }
m2tcid M7 = { t: 5.981085, c: D Dbd, i: 7, m: M7 }
m2tcid M8 = { t: 7.512128, c: D Dclap, i: 8, m: M8 }
m2tcid M9 = { t: 7.884157, c: D Dbd, i: 9, m: M9 }
m2tcid M10 = { t: 8.395697, c: D Dbd, i: 10, m: M10 }
m2tcid M11 = { t: 8.528054, c: D Dbd, i: 11, m: M11 }
m2tcid M12 = { t: 9.554711, c: D Ddj, i: 12, m: M12 }
m2tcid M13 = { t: 10.037634, c: D Dbd, i: 13, m: M13 }
m2tcid M14 = { t: 11.572254, c: D Dclap, i: 14, m: M14 }
m2tcid M15 = { t: 11.786887, c: D Dhh, i: 15, m: M15 }
m2tcid M16 = { t: 11.937129, c: D Dhh, i: 16, m: M16 }
m2tcid M17 = { t: 12.119567, c: D Dhh, i: 17, m: M17 }
m2tcid M18 = { t: 12.266232, c: D Dhh, i: 18, m: M18 }
m2tcid M19 = { t: 12.448669, c: D Dhh, i: 19, m: M19 }
m2tcid M20 = { t: 12.555986, c: D Dhh, i: 20, m: M20 }
m2tcid M21 = { t: 12.613221, c: D Dbd, i: 21, m: M21 }
m2tcid M22 = { t: 13.621992, c: D Ddj, i: 22, m: M22 }
m2tcid M23 = { t: 14.158573, c: D Dbd, i: 23, m: M23 }
m2tcid M24 = { t: 15.660998, c: D Dclap, i: 24, m: M24 }
m2tcid M25 = { t: 16.022296, c: D Dbd, i: 25, m: M25 }
m2tcid M26 = { t: 16.526682, c: D Dbd, i: 26, m: M26 }
m2tcid M27 = { t: 16.612535, c: L Lso, i: 27, m: M27 }
m2tcid M28 = { t: 16.676924, c: D Dbd, i: 28, m: M28 }
m2tcid M29 = { t: 16.780663, c: L Ltake, i: 29, m: M29 }
m2tcid M30 = { t: 17.023913, c: L Lme, i: 30, m: M30 }
m2tcid M31 = { t: 17.070417, c: D Dclap, i: 31, m: M31 }
m2tcid M32 = { t: 17.274317, c: L Lto, i: 32, m: M32 }
m2tcid M33 = { t: 17.610575, c: L Lyour, i: 33, m: M33 }
m2tcid M34 = { t: 17.664233, c: D Ddj, i: 34, m: M34 }
m2tcid M35 = { t: 17.818052, c: L Lo, i: 35, m: M35 }
m2tcid M36 = { t: 18.014799, c: L Lpen, i: 36, m: M36 }
m2tcid M37 = { t: 18.200813, c: D Dbd, i: 37, m: M37 }
m2tcid M38 = { t: 18.286666, c: L Lskies, i: 38, m: M38 }
m2tcid M39 = { t: 19.499338, c: D Dhh, i: 39, m: M39 }
m2tcid M40 = { t: 19.599500, c: D Dhh, i: 40, m: M40 }
m2tcid M41 = { t: 19.717548, c: D Dclap, i: 41, m: M41 }
m2tcid M42 = { t: 19.878522, c: D Dds, i: 42, m: M42 }
m2tcid M43 = { t: 20.139658, c: D Dds, i: 43, m: M43 }
m2tcid M44 = { t: 20.239819, c: D Dhh, i: 44, m: M44 }
m2tcid M45 = { t: 20.325672, c: D Dds, i: 45, m: M45 }
m2tcid M46 = { t: 20.365021, c: D Dhh, i: 46, m: M46 }
m2tcid M47 = { t: 20.461606, c: D Dhh, i: 47, m: M47 }
m2tcid M48 = { t: 20.551036, c: D Dhh, i: 48, m: M48 }
m2tcid M49 = { t: 20.654775, c: D Dhh, i: 49, m: M49 }
m2tcid M50 = { t: 20.726319, c: D Dbd, i: 50, m: M50 }
m2tcid M51 = { t: 20.830058, c: L Li, i: 51, m: M51 }
m2tcid M52 = { t: 21.069731, c: L Ljust, i: 52, m: M52 }
m2tcid M53 = { t: 21.395256, c: L Lwa, i: 53, m: M53 }
m2tcid M54 = { t: 21.588425, c: L Lna, i: 54, m: M54 }
m2tcid M55 = { t: 21.742245, c: D Ddj, i: 55, m: M55 }
m2tcid M56 = { t: 21.806635, c: L Lfeel, i: 56, m: M56 }
m2tcid M57 = { t: 22.178664, c: L La, i: 57, m: M57 }
m2tcid M58 = { t: 22.296712, c: D Dbd, i: 58, m: M58 }
m2tcid M59 = { t: 22.371833, c: L Llive, i: 59, m: M59 }
m2tcid M60 = { t: 23.058656, c: D Dbd, i: 60, m: M60 }
m2tcid M61 = { t: 23.319792, c: D Dbd, i: 61, m: M61 }
m2tcid M62 = { t: 23.570196, c: D Dhh, i: 62, m: M62 }
m2tcid M63 = { t: 23.677512, c: D Dhh, i: 63, m: M63 }
m2tcid M64 = { t: 23.784828, c: D Dclap, i: 64, m: M64 }
m2tcid M65 = { t: 24.028078, c: D Dds, i: 65, m: M65 }
m2tcid M66 = { t: 24.149703, c: D Dds, i: 66, m: M66 }
m2tcid M67 = { t: 24.149703, c: D Dbd, i: 67, m: M67 }
m2tcid M68 = { t: 24.317832, c: D Dds, i: 68, m: M68 }
m2tcid M69 = { t: 24.414416, c: D Dds, i: 69, m: M69 }
m2tcid M70 = { t: 24.536041, c: D Dds, i: 70, m: M70 }
m2tcid M71 = { t: 24.668398, c: D Dds, i: 71, m: M71 }
m2tcid M72 = { t: 24.668398, c: D Dbd, i: 72, m: M72 }
m2tcid M73 = { t: 24.804331, c: D Dbd, i: 73, m: M73 }
m2tcid M74 = { t: 24.893762, c: L Li, i: 74, m: M74 }
m2tcid M75 = { t: 25.033273, c: L Lwan, i: 75, m: M75 }
m2tcid M76 = { t: 25.226442, c: L Lna, i: 76, m: M76 }
m2tcid M77 = { t: 25.469691, c: L Lfeel, i: 77, m: M77 }
m2tcid M78 = { t: 25.698632, c: L Lyour, i: 78, m: M78 }
m2tcid M79 = { t: 25.826665, c: D Ddj, i: 79, m: M79 }
m2tcid M80 = { t: 25.934728, c: L Lbut, i: 80, m: M80 }
m2tcid M81 = { t: 26.177978, c: L Lter, i: 81, m: M81 }
m2tcid M82 = { t: 26.324093, c: D Dbd, i: 82, m: M82 }
m2tcid M83 = { t: 26.414073, c: L Lflies, i: 83, m: M83 }
m2tcid M84 = { t: 27.374965, c: D Dbd, i: 84, m: M84 }
m2tcid M85 = { t: 27.627414, c: D Dhh, i: 85, m: M85 }
m2tcid M86 = { t: 27.700609, c: D Dhh, i: 86, m: M86 }
m2tcid M87 = { t: 27.858949, c: D Dclap, i: 87, m: M87 }
m2tcid M88 = { t: 28.096460, c: D Dds, i: 88, m: M88 }
m2tcid M89 = { t: 28.250319, c: D Dds, i: 89, m: M89 }
m2tcid M90 = { t: 28.498286, c: D Dhh, i: 90, m: M90 }
m2tcid M91 = { t: 28.583431, c: D Dhh, i: 91, m: M91 }
m2tcid M92 = { t: 28.683514, c: D Dhh, i: 92, m: M92 }
m2tcid M93 = { t: 28.791066, c: D Dhh, i: 93, m: M93 }
m2tcid M94 = { t: 28.891149, c: D Dbd, i: 94, m: M94 }
m2tcid M95 = { t: 29.200361, c: D Dbd, i: 95, m: M95 }
m2tcid M96 = { t: 29.641026, c: D Ddj, i: 96, m: M96 }
m2tcid M97 = { t: 29.886005, c: D Delec, i: 97, m: M97 }
m2tcid M98 = { t: 30.404346, c: D Dbd, i: 98, m: M98 }
m2tcid M99 = { t: 31.237874, c: D Dbd, i: 99, m: M99 }
m2tcid M100 = { t: 31.718870, c: D Dhh, i: 100, m: M100 }
m2tcid M101 = { t: 31.820447, c: D Dhh, i: 101, m: M101 }
m2tcid M102 = { t: 31.941443, c: D Dclap, i: 102, m: M102 }
m2tcid M103 = { t: 32.290987, c: D Dbd, i: 103, m: M103 }
m2tcid M104 = { t: 32.771983, c: D Dbd, i: 104, m: M104 }
m2tcid M105 = { t: 32.951236, c: D Dbd, i: 105, m: M105 }
m2tcid M106 = { t: 33.046209, c: L Ldo, i: 106, m: M106 }
m2tcid M107 = { t: 33.303768, c: L Lyou, i: 107, m: M107 }
m2tcid M108 = { t: 33.589944, c: L Le, i: 108, m: M108 }
m2tcid M109 = { t: 33.793845, c: L Lver, i: 109, m: M109 }
m2tcid M110 = { t: 33.943105, c: D Ddj, i: 110, m: M110 }
m2tcid M111 = { t: 34.022786, c: L Lfan, i: 111, m: M111 }
m2tcid M112 = { t: 34.344734, c: L Lta, i: 112, m: M112 }
m2tcid M113 = { t: 34.471902, c: D Dbd, i: 113, m: M113 }
m2tcid M114 = { t: 34.555789, c: L Lsize, i: 114, m: M114 }
m2tcid M115 = { t: 35.728169, c: D Dhh, i: 115, m: M115 }
m2tcid M116 = { t: 35.828252, c: D Dhh, i: 116, m: M116 }
m2tcid M117 = { t: 35.895472, c: D Dsn, i: 117, m: M117 }
m2tcid M118 = { t: 36.407837, c: D Dhh, i: 118, m: M118 }
m2tcid M119 = { t: 36.522858, c: D Dhh, i: 119, m: M119 }
m2tcid M120 = { t: 36.621447, c: D Dhh, i: 120, m: M120 }
m2tcid M121 = { t: 36.721531, c: D Dhh, i: 121, m: M121 }
m2tcid M122 = { t: 36.817132, c: D Dhh, i: 122, m: M122 }
m2tcid M123 = { t: 36.920203, c: D Dhh, i: 123, m: M123 }
m2tcid M124 = { t: 37.020483, c: L La, i: 124, m: M124 }
m2tcid M125 = { t: 37.102758, c: L Lbout, i: 125, m: M125 }
m2tcid M126 = { t: 37.363894, c: L Lme, i: 126, m: M126 }
m2tcid M127 = { t: 37.675111, c: L Lwhen, i: 127, m: M127 }
m2tcid M128 = { t: 37.882589, c: L Lyou, i: 128, m: M128 }
m2tcid M129 = { t: 37.985266, c: D Dsn, i: 129, m: M129 }
m2tcid M130 = { t: 38.057872, c: L Lclose, i: 130, m: M130 }
m2tcid M131 = { t: 38.404860, c: L Lyour, i: 131, m: M131 }
m2tcid M132 = { t: 38.536470, c: D Dbd, i: 132, m: M132 }
m2tcid M133 = { t: 38.623070, c: L Leyes, i: 133, m: M133 }
m2tcid M134 = { t: 39.544770, c: D Delec, i: 134, m: M134 }
m2tcid M135 = { t: 39.570164, c: D Delec, i: 135, m: M135 }
m2tcid M136 = { t: 39.604521, c: D Delec, i: 136, m: M136 }
m2tcid M137 = { t: 39.638878, c: D Delec, i: 137, m: M137 }
m2tcid M138 = { t: 39.819625, c: D Dhh, i: 138, m: M138 }
m2tcid M139 = { t: 39.969003, c: D Dhh, i: 139, m: M139 }
m2tcid M140 = { t: 40.064604, c: D Dclap, i: 140, m: M140 }
m2tcid M141 = { t: 40.430580, c: D Dbd, i: 141, m: M141 }
m2tcid M142 = { t: 40.576970, c: D Dhh, i: 142, m: M142 }
m2tcid M143 = { t: 40.663609, c: D Dhh, i: 143, m: M143 }
m2tcid M144 = { t: 40.745767, c: D Dhh, i: 144, m: M144 }
m2tcid M145 = { t: 40.811493, c: D Dhh, i: 145, m: M145 }
m2tcid M146 = { t: 40.878713, c: D Dhh, i: 146, m: M146 }
m2tcid M147 = { t: 40.947427, c: D Dbd, i: 147, m: M147 }
m2tcid M148 = { t: 40.980290, c: D Dhh, i: 148, m: M148 }
m2tcid M149 = { t: 41.032572, c: D Dhh, i: 149, m: M149 }
m2tcid M150 = { t: 41.080373, c: D Dbd, i: 150, m: M150 }
m2tcid M151 = { t: 41.144999, c: L Lthat, i: 151, m: M151 }
m2tcid M152 = { t: 41.401535, c: D Dbd, i: 152, m: M152 }
m2tcid M153 = { t: 41.474101, c: L Lcan, i: 153, m: M153 }
m2tcid M154 = { t: 41.589751, c: D Dbd, i: 154, m: M154 }
m2tcid M155 = { t: 41.685156, c: L Lfill, i: 155, m: M155 }
m2tcid M156 = { t: 41.971333, c: L Lyour, i: 156, m: M156 }
m2tcid M157 = { t: 42.087179, c: D Dclap, i: 157, m: M157 }
m2tcid M158 = { t: 42.289704, c: L Lbut, i: 158, m: M158 }
m2tcid M159 = { t: 42.550840, c: L Lter, i: 159, m: M159 }
m2tcid M160 = { t: 42.599545, c: D Dbd, i: 160, m: M160 }
m2tcid M161 = { t: 42.683196, c: L Lflies, i: 161, m: M161 }
m2tcid M162 = { t: 44.133654, c: D Dclap, i: 162, m: M162 }
m2tcid M163 = { t: 44.623613, c: D Dhh, i: 163, m: M163 }
m2tcid M164 = { t: 44.723696, c: D Dhh, i: 164, m: M164 }
m2tcid M165 = { t: 44.799879, c: D Dhh, i: 165, m: M165 }
m2tcid M166 = { t: 44.879049, c: D Dhh, i: 166, m: M166 }
m2tcid M167 = { t: 44.970170, c: D Dhh, i: 167, m: M167 }
m2tcid M168 = { t: 45.064278, c: D Dhh, i: 168, m: M168 }
m2tcid M169 = { t: 45.159879, c: D Dbd, i: 169, m: M169 }
m2tcid M170 = { t: 45.292825, c: D Dtm, i: 170, m: M170 }
m2tcid M171 = { t: 45.433241, c: D Dtm, i: 171, m: M171 }
m2tcid M172 = { t: 45.554237, c: D Dtm, i: 172, m: M172 }
m2tcid M173 = { t: 45.675232, c: D Dtm, i: 173, m: M173 }
m2tcid M174 = { t: 45.802204, c: D Dtm, i: 174, m: M174 }
m2tcid M175 = { t: 45.971000, c: D Dtm, i: 175, m: M175 }
m2tcid M176 = { t: 46.100959, c: D Dtm, i: 176, m: M176 }
m2tcid M177 = { t: 46.236893, c: D Dtm, i: 177, m: M177 }
m2tcid M178 = { t: 46.342951, c: D Dtm, i: 178, m: M178 }
m2tcid M179 = { t: 46.471416, c: D Dtm, i: 179, m: M179 }
m2tcid M180 = { t: 46.568511, c: D Dtm, i: 180, m: M180 }
m2tcid M181 = { t: 46.686520, c: D Dbd, i: 181, m: M181 }
m2tcid M182 = { t: 46.829922, c: D Dtm, i: 182, m: M182 }
m2tcid M183 = { t: 46.955400, c: D Dtm, i: 183, m: M183 }
m2tcid M184 = { t: 47.071914, c: D Dtm, i: 184, m: M184 }
m2tcid M185 = { t: 47.191417, c: D Dtm, i: 185, m: M185 }
m2tcid M186 = { t: 47.298969, c: D Dtm, i: 186, m: M186 }
m2tcid M187 = { t: 47.448346, c: D Dtm, i: 187, m: M187 }
m2tcid M188 = { t: 47.597724, c: D Dtm, i: 188, m: M188 }
m2tcid M189 = { t: 47.738139, c: D Dtm, i: 189, m: M189 }
m2tcid M190 = { t: 47.881542, c: D Dtm, i: 190, m: M190 }
m2tcid M191 = { t: 48.051832, c: D Dtm, i: 191, m: M191 }
m2tcid M192 = { t: 48.204198, c: D Dtm, i: 192, m: M192 }
m2tcid M193 = { t: 48.320712, c: D Dtm, i: 193, m: M193 }
m2tcid M194 = { t: 48.437227, c: D Dtm, i: 194, m: M194 }
m2tcid M195 = { t: 48.594074, c: D Dbd, i: 195, m: M195 }
m2tcid M196 = { t: 48.824115, c: D Dtm, i: 196, m: M196 }
m2tcid M197 = { t: 48.909261, c: D Dtm, i: 197, m: M197 }
m2tcid M198 = { t: 48.983949, c: D Dtm, i: 198, m: M198 }
m2tcid M199 = { t: 49.073576, c: D Dbd, i: 199, m: M199 }
m2tcid M200 = { t: 49.172244, c: L Lwan, i: 200, m: M200 }
m2tcid M201 = { t: 49.203535, c: D Dbd, i: 201, m: M201 }
m2tcid M202 = { t: 49.565736, c: L Lna, i: 202, m: M202 }
m2tcid M203 = { t: 49.766060, c: L Lfeel, i: 203, m: M203 }
m2tcid M204 = { t: 49.853328, c: D Dclap, i: 204, m: M204 }
m2tcid M205 = { t: 50.070122, c: L Lyour, i: 205, m: M205 }
m2tcid M206 = { t: 50.334835, c: L Lbut, i: 206, m: M206 }
m2tcid M207 = { t: 50.653206, c: L Lter, i: 207, m: M207 }
m2tcid M208 = { t: 50.720492, c: D Dbd, i: 208, m: M208 }
m2tcid M209 = { t: 50.792717, c: L Lflies, i: 209, m: M209 }
m2tcid M210 = { t: 50.974959, c: D Dbd, i: 210, m: M210 }
m2tcid M211 = { t: 51.429460, c: L Lwan, i: 211, m: M211 }
m2tcid M212 = { t: 51.478865, c: D Dbd, i: 212, m: M212 }
m2tcid M213 = { t: 51.669132, c: L Lna, i: 213, m: M213 }
m2tcid M214 = { t: 51.732327, c: D Dbd, i: 214, m: M214 }
m2tcid M215 = { t: 51.869456, c: L Lfeel, i: 215, m: M215 }
m2tcid M216 = { t: 52.091242, c: L Lyour, i: 216, m: M216 }
m2tcid M217 = { t: 52.488312, c: L Lbut, i: 217, m: M217 }
m2tcid M218 = { t: 52.492712, c: D Dbd, i: 218, m: M218 }
m2tcid M219 = { t: 52.749448, c: L Lter, i: 219, m: M219 }
m2tcid M220 = { t: 52.867496, c: L Lflies, i: 220, m: M220 }
m2tcid M221 = { t: 53.183697, c: D Dfuzz, i: 221, m: M221 }
m2tcid M222 = { t: 53.439848, c: L Lwan, i: 222, m: M222 }
m2tcid M223 = { t: 53.722447, c: L Lna, i: 223, m: M223 }
m2tcid M224 = { t: 53.919194, c: L Lfeel, i: 224, m: M224 }
m2tcid M225 = { t: 54.244719, c: L Lyour, i: 225, m: M225 }
m2tcid M226 = { t: 54.509432, c: L Lbut, i: 226, m: M226 }
m2tcid M227 = { t: 54.538509, c: D Dcrunch, i: 227, m: M227 }
m2tcid M228 = { t: 54.766991, c: D Dbd, i: 228, m: M228 }
m2tcid M229 = { t: 54.766991, c: L Lter, i: 229, m: M229 }
m2tcid M230 = { t: 55.010241, c: L Lflies, i: 230, m: M230 }
m2tcid M231 = { t: 55.025317, c: D Dbd, i: 231, m: M231 }
m2tcid M232 = { t: 55.518204, c: D Dbd, i: 232, m: M232 }
m2tcid M233 = { t: 55.518204, c: L Lwan, i: 233, m: M233 }
m2tcid M234 = { t: 55.718527, c: L Lna, i: 234, m: M234 }
m2tcid M235 = { t: 55.785702, c: D Dbd, i: 235, m: M235 }
m2tcid M236 = { t: 55.893810, c: L Lfeel, i: 236, m: M236 }
m2tcid M237 = { t: 56.112020, c: L Lyour, i: 237, m: M237 }
m2tcid M238 = { t: 56.336880, c: D Dcrunch, i: 238, m: M238 }
m2tcid M239 = { t: 56.542063, c: D Dbd, i: 239, m: M239 }
m2tcid M240 = { t: 56.562747, c: L Lbut, i: 240, m: M240 }
m2tcid M241 = { t: 56.788111, c: L Lter, i: 241, m: M241 }
m2tcid M242 = { t: 56.977703, c: L Lflies, i: 242, m: M242 }
m2tcid M243 = { t: 57.224530, c: L Lso, i: 243, m: M243 }
m2tcid M244 = { t: 57.350727, c: D Dbd, i: 244, m: M244 }
m2tcid M245 = { t: 57.367618, c: L Ltake, i: 245, m: M245 }
m2tcid M246 = { t: 57.538362, c: D Dbd, i: 246, m: M246 }
m2tcid M247 = { t: 57.666687, c: D Dbd, i: 247, m: M247 }
m2tcid M248 = { t: 57.789728, c: L Lme, i: 248, m: M248 }
m2tcid M249 = { t: 57.877682, c: D Dbd, i: 249, m: M249 }
m2tcid M250 = { t: 57.975743, c: L Lto, i: 250, m: M250 }
m2tcid M251 = { t: 58.204684, c: L Lthe, i: 251, m: M251 }
m2tcid M252 = { t: 58.211169, c: D Dbd, i: 252, m: M252 }
m2tcid M253 = { t: 58.362081, c: L Lo, i: 253, m: M253 }
m2tcid M254 = { t: 58.744842, c: L Lpen, i: 254, m: M254 }
m2tcid M255 = { t: 58.904615, c: D Dbd, i: 255, m: M255 }
m2tcid M256 = { t: 58.991669, c: L Lskies, i: 256, m: M256 }
m2tcid M257 = { t: 59.592639, c: L Ltake, i: 257, m: M257 }
m2tcid M258 = { t: 59.601762, c: D Dbd, i: 258, m: M258 }
m2tcid M259 = { t: 59.878815, c: L Lme, i: 259, m: M259 }
m2tcid M260 = { t: 59.934912, c: D Dbd, i: 260, m: M260 }
m2tcid M261 = { t: 60.029058, c: L Lto, i: 261, m: M261 }
m2tcid M262 = { t: 60.195262, c: D Dsn, i: 262, m: M262 }
m2tcid M263 = { t: 60.236536, c: L Lyour, i: 263, m: M263 }
m2tcid M264 = { t: 60.255723, c: D Dsn, i: 264, m: M264 }
m2tcid M265 = { t: 60.351966, c: D Dclap, i: 265, m: M265 }
m2tcid M266 = { t: 60.572793, c: L Lo, i: 266, m: M266 }
m2tcid M267 = { t: 60.724601, c: D Dbd, i: 267, m: M267 }
m2tcid M268 = { t: 60.826774, c: L Lpen, i: 268, m: M268 }
m2tcid M269 = { t: 61.094767, c: D Dhh, i: 269, m: M269 }
m2tcid M270 = { t: 61.137991, c: L Lskies, i: 270, m: M270 }
m2tcid M271 = { t: 61.220624, c: D Dhh, i: 271, m: M271 }
m2tcid M272 = { t: 61.345247, c: D Dhh, i: 272, m: M272 }
m2tcid M273 = { t: 61.484676, c: D Dbd, i: 273, m: M273 }
m2tcid M274 = { t: 61.577987, c: L Li, i: 274, m: M274 }
m2tcid M275 = { t: 61.764002, c: L Ljust, i: 275, m: M275 }
m2tcid M276 = { t: 61.777108, c: D Dbd, i: 276, m: M276 }
m2tcid M277 = { t: 61.964325, c: D Dbd, i: 277, m: M277 }
m2tcid M278 = { t: 61.964325, c: L Lwan, i: 278, m: M278 }
m2tcid M279 = { t: 62.329200, c: L Lna, i: 279, m: M279 }
m2tcid M280 = { t: 62.515214, c: L Lfeel, i: 280, m: M280 }
m2tcid M281 = { t: 62.826431, c: L La, i: 281, m: M281 }
m2tcid M282 = { t: 63.180574, c: L Llive, i: 282, m: M282 }
m2tcid M283 = { t: 63.458898, c: D Dbd, i: 283, m: M283 }
m2tcid M284 = { t: 63.592158, c: D Dbd, i: 284, m: M284 }
m2tcid M285 = { t: 63.735289, c: D Dbd, i: 285, m: M285 }
m2tcid M286 = { t: 63.969728, c: D Dbd, i: 286, m: M286 }
m2tcid M287 = { t: 64.162215, c: D Dbd, i: 287, m: M287 }
m2tcid M288 = { t: 64.337427, c: D Dbd, i: 288, m: M288 }
m2tcid M289 = { t: 64.896378, c: D Dhh, i: 289, m: M289 }
m2tcid M290 = { t: 64.980283, c: D Dhh, i: 290, m: M290 }
m2tcid M291 = { t: 65.044445, c: D Dhh, i: 291, m: M291 }
m2tcid M292 = { t: 65.107373, c: D Dbd, i: 292, m: M292 }
m2tcid M293 = { t: 65.122180, c: D Dhh, i: 293, m: M293 }
m2tcid M294 = { t: 65.217189, c: D Dhh, i: 294, m: M294 }
m2tcid M295 = { t: 65.301094, c: D Dhh, i: 295, m: M295 }
m2tcid M296 = { t: 65.378829, c: D Dhh, i: 296, m: M296 }
m2tcid M297 = { t: 65.387709, c: L Li, i: 297, m: M297 }
m2tcid M298 = { t: 65.499750, c: D Dbd, i: 298, m: M298 }
m2tcid M299 = { t: 65.548683, c: L Lwan, i: 299, m: M299 }
m2tcid M300 = { t: 65.665091, c: D Dbd, i: 300, m: M300 }
m2tcid M301 = { t: 65.836602, c: D Dbd, i: 301, m: M301 }
m2tcid M302 = { t: 65.902826, c: L Lna, i: 302, m: M302 }
m2tcid M303 = { t: 66.088841, c: D Dbd, i: 303, m: M303 }
m2tcid M304 = { t: 66.088841, c: L Lfeel, i: 304, m: M304 }
m2tcid M305 = { t: 66.379513, c: D Dbd, i: 305, m: M305 }
m2tcid M306 = { t: 66.389326, c: L Lyour, i: 306, m: M306 }
m2tcid M307 = { t: 66.510305, c: D Dclap, i: 307, m: M307 }
m2tcid M308 = { t: 66.729161, c: L Lbut, i: 308, m: M308 }
m2tcid M309 = { t: 66.954524, c: L Lter, i: 309, m: M309 }
m2tcid M310 = { t: 67.258587, c: L Lflies, i: 310, m: M310 }
m2tcid M311 = { t: 67.992205, c: D Dbd, i: 311, m: M311 }
m2tcid M312 = { t: 68.174821, c: D Dbd, i: 312, m: M312 }
m2tcid M313 = { t: 68.300677, c: D Dhh, i: 313, m: M313 }
m2tcid M314 = { t: 68.372243, c: D Dhh, i: 314, m: M314 }
m2tcid M315 = { t: 68.422832, c: D Dbd, i: 315, m: M315 }
m2tcid M316 = { t: 68.452446, c: D Dhh, i: 316, m: M316 }
m2tcid M317 = { t: 68.536350, c: D Dclap, i: 317, m: M317 }
m2tcid M318 = { t: 69.045946, c: D Dbd, i: 318, m: M318 }
m2tcid M319 = { t: 69.184142, c: D Dbd, i: 319, m: M319 }
m2tcid M320 = { t: 69.307531, c: D Dbd, i: 320, m: M320 }
m2tcid M321 = { t: 69.432153, c: D Dbd, i: 321, m: M321 }
m2tcid M322 = { t: 70.209503, c: D Dbd, i: 322, m: M322 }
m2tcid M323 = { t: 70.571033, c: D Dsn, i: 323, m: M323 }
m2tcid M324 = { t: 71.914738, c: D Dbd, i: 324, m: M324 }
m2tcid M325 = { t: 72.103523, c: D Dbd, i: 325, m: M325 }
m2tcid M326 = { t: 72.265162, c: D Dbd, i: 326, m: M326 }
m2tcid M327 = { t: 72.436672, c: D Dbd, i: 327, m: M327 }
m2tcid M328 = { t: 72.556360, c: D Dclap, i: 328, m: M328 }
m2tcid M329 = { t: 73.747635, c: L Ldo, i: 329, m: M329 }
m2tcid M330 = { t: 73.926495, c: L Lyou, i: 330, m: M330 }
m2tcid M331 = { t: 74.269906, c: L Le, i: 331, m: M331 }
m2tcid M332 = { t: 74.452344, c: L Lver, i: 332, m: M332 }
m2tcid M333 = { t: 74.653971, c: D Ddj, i: 333, m: M333 }
m2tcid M334 = { t: 74.742097, c: L Lfan, i: 334, m: M334 }
m2tcid M335 = { t: 75.103395, c: L Lta, i: 335, m: M335 }
m2tcid M336 = { t: 75.149994, c: D Dbd, i: 336, m: M336 }
m2tcid M337 = { t: 75.239329, c: L Lsize, i: 337, m: M337 }
m2tcid M338 = { t: 75.761600, c: L Ldo, i: 338, m: M338 }
m2tcid M339 = { t: 75.918997, c: L Lyou, i: 339, m: M339 }
m2tcid M340 = { t: 76.344684, c: L Le, i: 340, m: M340 }
m2tcid M341 = { t: 76.541431, c: L Lver, i: 341, m: M341 }
m2tcid M342 = { t: 76.655338, c: D Dsn, i: 342, m: M342 }
m2tcid M343 = { t: 76.791835, c: L Lfan, i: 343, m: M343 }
m2tcid M344 = { t: 77.110643, c: D Dhh, i: 344, m: M344 }
m2tcid M345 = { t: 77.131669, c: L Lta, i: 345, m: M345 }
m2tcid M346 = { t: 77.199483, c: D Dhh, i: 346, m: M346 }
m2tcid M347 = { t: 77.321638, c: D Dhh, i: 347, m: M347 }
m2tcid M348 = { t: 77.403537, c: L Lsize, i: 348, m: M348 }
m2tcid M349 = { t: 77.459834, c: D Dhh, i: 349, m: M349 }
m2tcid M350 = { t: 77.577053, c: D Dhh, i: 350, m: M350 }
m2tcid M351 = { t: 77.682559, c: L La, i: 351, m: M351 }
m2tcid M352 = { t: 77.689337, c: D Dbd, i: 352, m: M352 }
m2tcid M353 = { t: 77.771989, c: L Lbout, i: 353, m: M353 }
m2tcid M354 = { t: 78.136864, c: L Lme, i: 354, m: M354 }
m2tcid M355 = { t: 78.340764, c: L Lwhen, i: 355, m: M355 }
m2tcid M356 = { t: 78.594746, c: L Lyou, i: 356, m: M356 }
m2tcid M357 = { t: 78.703593, c: D Dsn, i: 357, m: M357 }
m2tcid M358 = { t: 78.863036, c: L Lclosed, i: 358, m: M358 }
m2tcid M359 = { t: 79.188562, c: L Lyour, i: 359, m: M359 }
m2tcid M360 = { t: 79.218125, c: D Dbd, i: 360, m: M360 }
m2tcid M361 = { t: 79.424657, c: L Leyes, i: 361, m: M361 }
m2tcid M362 = { t: 79.886116, c: L Lbout, i: 362, m: M362 }
m2tcid M363 = { t: 80.075708, c: L Lme, i: 363, m: M363 }
m2tcid M364 = { t: 80.183024, c: L Lwhen, i: 364, m: M364 }
m2tcid M365 = { t: 80.544555, c: D Dsn, i: 365, m: M365 }
m2tcid M366 = { t: 80.576517, c: L Lyou, i: 366, m: M366 }
m2tcid M367 = { t: 80.658073, c: D Dsn, i: 367, m: M367 }
m2tcid M368 = { t: 80.756784, c: D Dclap, i: 368, m: M368 }
m2tcid M369 = { t: 80.816189, c: L Lclose, i: 369, m: M369 }
m2tcid M370 = { t: 81.109676, c: D Dbd, i: 370, m: M370 }
m2tcid M371 = { t: 81.188219, c: L Lyour, i: 371, m: M371 }
m2tcid M372 = { t: 81.246638, c: D Dhh, i: 372, m: M372 }
m2tcid M373 = { t: 81.336712, c: D Dhh, i: 373, m: M373 }
m2tcid M374 = { t: 81.442200, c: L Leyes, i: 374, m: M374 }
m2tcid M375 = { t: 81.460101, c: D Dhh, i: 375, m: M375 }
m2tcid M376 = { t: 81.550175, c: D Dhh, i: 376, m: M376 }
m2tcid M377 = { t: 81.641483, c: D Dhh, i: 377, m: M377 }
m2tcid M378 = { t: 81.759936, c: D Dbd, i: 378, m: M378 }
m2tcid M379 = { t: 81.817806, c: L Li, i: 379, m: M379 }
m2tcid M380 = { t: 82.054835, c: D Dbd, i: 380, m: M380 }
m2tcid M381 = { t: 82.136178, c: L Lcan, i: 381, m: M381 }
m2tcid M382 = { t: 82.285572, c: D Dbd, i: 382, m: M382 }
m2tcid M383 = { t: 82.365119, c: L Lfeel, i: 383, m: M383 }
m2tcid M384 = { t: 82.564431, c: D Dbd, i: 384, m: M384 }
m2tcid M385 = { t: 82.762188, c: L Lyour, i: 385, m: M385 }
m2tcid M386 = { t: 82.797636, c: D Dsn, i: 386, m: M386 }
m2tcid M387 = { t: 82.969666, c: L Lbut, i: 387, m: M387 }
m2tcid M388 = { t: 83.223647, c: L Lter, i: 388, m: M388 }
m2tcid M389 = { t: 83.264046, c: D Dbd, i: 389, m: M389 }
m2tcid M390 = { t: 83.348850, c: L Lflies, i: 390, m: M390 }
m2tcid M391 = { t: 83.985592, c: L Li, i: 391, m: M391 }
m2tcid M392 = { t: 84.150143, c: L Lcan, i: 392, m: M392 }
m2tcid M393 = { t: 84.339735, c: L Lfeel, i: 393, m: M393 }
m2tcid M394 = { t: 84.515209, c: D Dhh, i: 394, m: M394 }
m2tcid M395 = { t: 84.628727, c: D Dhh, i: 395, m: M395 }
m2tcid M396 = { t: 84.668838, c: L Lyour, i: 396, m: M396 }
m2tcid M397 = { t: 84.722503, c: D Dsn, i: 397, m: M397 }
m2tcid M398 = { t: 84.794040, c: L Lbut, i: 398, m: M398 }
m2tcid M399 = { t: 85.090948, c: L Lter, i: 399, m: M399 }
m2tcid M400 = { t: 85.324640, c: D Dhh, i: 400, m: M400 }
m2tcid M401 = { t: 85.405742, c: L Lflies, i: 401, m: M401 }
m2tcid M402 = { t: 85.441860, c: D Dhh, i: 402, m: M402 }
m2tcid M403 = { t: 85.554144, c: D Dhh, i: 403, m: M403 }
m2tcid M404 = { t: 85.662726, c: D Dhh, i: 404, m: M404 }
m2tcid M405 = { t: 85.737993, c: D Dhh, i: 405, m: M405 }
m2tcid M406 = { t: 85.837938, c: D Dbd, i: 406, m: M406 }
m2tcid M407 = { t: 85.928012, c: D Dtm, i: 407, m: M407 }
m2tcid M408 = { t: 86.041530, c: D Dtm, i: 408, m: M408 }
m2tcid M409 = { t: 86.155048, c: D Dtm, i: 409, m: M409 }
m2tcid M410 = { t: 86.288308, c: D Dtm, i: 410, m: M410 }
m2tcid M411 = { t: 86.436374, c: D Dtm, i: 411, m: M411 }
m2tcid M412 = { t: 86.572102, c: D Dtm, i: 412, m: M412 }
m2tcid M413 = { t: 86.707830, c: D Dtm, i: 413, m: M413 }
m2tcid M414 = { t: 86.863300, c: D Dtm, i: 414, m: M414 }
m2tcid M415 = { t: 87.001495, c: D Dtm, i: 415, m: M415 }
m2tcid M416 = { t: 87.129820, c: D Dtm, i: 416, m: M416 }
m2tcid M417 = { t: 87.250741, c: D Dtm, i: 417, m: M417 }
m2tcid M418 = { t: 87.384001, c: D Dbd, i: 418, m: M418 }
m2tcid M419 = { t: 87.514793, c: D Dtm, i: 419, m: M419 }
m2tcid M420 = { t: 87.625843, c: D Dtm, i: 420, m: M420 }
m2tcid M421 = { t: 87.749232, c: D Dtm, i: 421, m: M421 }
m2tcid M422 = { t: 87.882492, c: D Dtm, i: 422, m: M422 }
m2tcid M423 = { t: 88.013284, c: D Dtm, i: 423, m: M423 }
m2tcid M424 = { t: 88.156415, c: D Dtm, i: 424, m: M424 }
m2tcid M425 = { t: 88.287207, c: D Dtm, i: 425, m: M425 }
m2tcid M426 = { t: 88.432806, c: D Dtm, i: 426, m: M426 }
m2tcid M427 = { t: 88.568534, c: D Dtm, i: 427, m: M427 }
m2tcid M428 = { t: 88.691923, c: D Dtm, i: 428, m: M428 }
m2tcid M429 = { t: 88.827651, c: D Dtm, i: 429, m: M429 }
m2tcid M430 = { t: 88.975717, c: D Dtm, i: 430, m: M430 }
m2tcid M431 = { t: 89.128719, c: D Dtm, i: 431, m: M431 }
m2tcid M432 = { t: 89.273084, c: D Dbd, i: 432, m: M432 }
m2tcid M433 = { t: 89.755535, c: D Dbd, i: 433, m: M433 }
m2tcid M434 = { t: 89.912239, c: D Dbd, i: 434, m: M434 }
m2tcid M435 = { t: 89.920173, c: L Lwan, i: 435, m: M435 }
m2tcid M436 = { t: 90.281471, c: L Llna, i: 436, m: M436 }
m2tcid M437 = { t: 90.499680, c: L Lfeel, i: 437, m: M437 }
m2tcid M438 = { t: 90.557563, c: D Dclap, i: 438, m: M438 }
m2tcid M439 = { t: 90.835937, c: L Lyour, i: 439, m: M439 }
m2tcid M440 = { t: 90.861099, c: D Dcrunch, i: 440, m: M440 }
m2tcid M441 = { t: 91.104228, c: L Lbut, i: 441, m: M441 }
m2tcid M442 = { t: 91.329591, c: L Lter, i: 442, m: M442 }
m2tcid M443 = { t: 91.396607, c: D Dbd, i: 443, m: M443 }
m2tcid M444 = { t: 91.576418, c: L Lflies, i: 444, m: M444 }
m2tcid M445 = { t: 91.710015, c: D Dbd, i: 445, m: M445 }
m2tcid M446 = { t: 92.145194, c: D Dbd, i: 446, m: M446 }
m2tcid M447 = { t: 92.145194, c: L Lwan, i: 447, m: M447 }
m2tcid M448 = { t: 92.324054, c: L Lna, i: 448, m: M448 }
m2tcid M449 = { t: 92.413331, c: D Dbd, i: 449, m: M449 }
m2tcid M450 = { t: 92.578036, c: L Lfeel, i: 450, m: M450 }
m2tcid M451 = { t: 92.903561, c: L Lyour, i: 451, m: M451 }
m2tcid M452 = { t: 93.157543, c: L Lbut, i: 452, m: M452 }
m2tcid M453 = { t: 93.173407, c: D Dbd, i: 453, m: M453 }
m2tcid M454 = { t: 93.339980, c: L Lter, i: 454, m: M454 }
m2tcid M455 = { t: 93.511686, c: L Lflies, i: 455, m: M455 }
m2tcid M456 = { t: 93.847110, c: D Dbd, i: 456, m: M456 }
m2tcid M457 = { t: 93.898933, c: D Dcrunch, i: 457, m: M457 }
m2tcid M458 = { t: 94.087616, c: L Lwan, i: 458, m: M458 }
m2tcid M459 = { t: 94.345174, c: L Lna, i: 459, m: M459 }
m2tcid M460 = { t: 94.524034, c: L Lfeel, i: 460, m: M460 }
m2tcid M461 = { t: 94.899641, c: L Lyour, i: 461, m: M461 }
m2tcid M462 = { t: 95.189394, c: D Dcrunch, i: 462, m: M462 }
m2tcid M463 = { t: 95.189394, c: L Lbut, i: 463, m: M463 }
m2tcid M464 = { t: 95.443376, c: L Lter, i: 464, m: M464 }
m2tcid M465 = { t: 95.453633, c: D Dbd, i: 465, m: M465 }
m2tcid M466 = { t: 95.683048, c: L Lflies, i: 466, m: M466 }
m2tcid M467 = { t: 95.737427, c: D Dbd, i: 467, m: M467 }
m2tcid M468 = { t: 96.101581, c: L Lwan, i: 468, m: M468 }
m2tcid M469 = { t: 96.208773, c: D Dbd, i: 469, m: M469 }
m2tcid M470 = { t: 96.402066, c: D Dbd, i: 470, m: M470 }
m2tcid M471 = { t: 96.402066, c: L Lna, i: 471, m: M471 }
m2tcid M472 = { t: 96.627430, c: L Lfeel, i: 472, m: M472 }
m2tcid M473 = { t: 96.960110, c: L Lyour, i: 473, m: M473 }
m2tcid M474 = { t: 97.008333, c: D Dclap, i: 474, m: M474 }
m2tcid M475 = { t: 97.217669, c: L Lbut, i: 475, m: M475 }
m2tcid M476 = { t: 97.242772, c: D Dbd, i: 476, m: M476 }
m2tcid M477 = { t: 97.414415, c: L Lter, i: 477, m: M477 }
m2tcid M478 = { t: 97.664819, c: L Lflies, i: 478, m: M478 }
m2tcid M479 = { t: 97.973234, c: D Dbd, i: 479, m: M479 }
m2tcid M480 = { t: 98.212132, c: L Lwan, i: 480, m: M480 }
m2tcid M481 = { t: 98.416032, c: L Lna, i: 481, m: M481 }
m2tcid M482 = { t: 98.584161, c: L Lfeel, i: 482, m: M482 }
m2tcid M483 = { t: 98.659276, c: D Dclap, i: 483, m: M483 }
m2tcid M484 = { t: 98.891247, c: D Dcrunch, i: 484, m: M484 }
m2tcid M485 = { t: 98.959767, c: L Lyour, i: 485, m: M485 }
m2tcid M486 = { t: 99.270984, c: L Lbut, i: 486, m: M486 }
m2tcid M487 = { t: 99.489193, c: D Dbd, i: 487, m: M487 }
m2tcid M488 = { t: 99.489193, c: L Lter, i: 488, m: M488 }
m2tcid M489 = { t: 99.740163, c: D Dbd, i: 489, m: M489 }
m2tcid M490 = { t: 99.757484, c: L Lflies, i: 490, m: M490 }
m2tcid M491 = { t: 100.247561, c: D Dbd, i: 491, m: M491 }
m2tcid M492 = { t: 100.247561, c: L Lwan, i: 492, m: M492 }
m2tcid M493 = { t: 100.412112, c: L Lna, i: 493, m: M493 }
m2tcid M494 = { t: 100.529851, c: D Dbd, i: 494, m: M494 }
m2tcid M495 = { t: 100.623167, c: L Lfeel, i: 495, m: M495 }
m2tcid M496 = { t: 101.034545, c: L Lyour, i: 496, m: M496 }
m2tcid M497 = { t: 101.267717, c: D Dbd, i: 497, m: M497 }
m2tcid M498 = { t: 101.956227, c: D Dbd, i: 498, m: M498 }
m2tcid M499 = { t: 102.047535, c: D Dbd, i: 499, m: M499 }
m2tcid M500 = { t: 102.690791, c: L Lwan, i: 500, m: M500 }
m2tcid M501 = { t: 102.976967, c: L Lna, i: 501, m: M501 }
m2tcid M502 = { t: 103.112901, c: L Lfeel, i: 502, m: M502 }
m2tcid M503 = { t: 103.343118, c: D Dcrunch, i: 503, m: M503 }
m2tcid M504 = { t: 103.562750, c: D Dbd, i: 504, m: M504 }
m2tcid M505 = { t: 103.688831, c: L Lyour, i: 505, m: M505 }
m2tcid M506 = { t: 103.742898, c: D Dbd, i: 506, m: M506 }
m2tcid M507 = { t: 104.300615, c: D Dbd, i: 507, m: M507 }
m2tcid M508 = { t: 104.539990, c: D Dbd, i: 508, m: M508 }
m2tcid M509 = { t: 104.651099, c: L Lfeel, i: 509, m: M509 }
m2tcid M510 = { t: 104.919389, c: L Lyour, i: 510, m: M510 }
m2tcid M511 = { t: 105.101826, c: D Dclap, i: 511, m: M511 }
m2tcid M512 = { t: 105.101826, c: L Lbut, i: 512, m: M512 }
m2tcid M513 = { t: 105.376566, c: D Dbd, i: 513, m: M513 }
m2tcid M514 = { t: 105.502473, c: L Lter, i: 514, m: M514 }
m2tcid M515 = { t: 105.820844, c: L Lflies, i: 515, m: M515 }
m2tcid M516 = { t: 107.609905, c: D Dbd, i: 516, m: M516 }
m2tcid M517 = { t: 107.861618, c: D Dbd, i: 517, m: M517 }
m2tcid M518 = { t: 108.355174, c: D Dbd, i: 518, m: M518 }
m2tcid M519 = { t: 108.611063, c: D Dbd, i: 519, m: M519 }
m2tcid M520 = { t: 108.611063, c: L Llies, i: 520, m: M520 }
m2tcid M521 = { t: 109.371898, c: D Dbd, i: 521, m: M521 }
m2tcid M522 = { t: 109.598371, c: L Loh, i: 522, m: M522 }
m2tcid M523 = { t: 109.984709, c: L Li, i: 523, m: M523 }
m2tcid M524 = { t: 110.057940, c: D Dbd, i: 524, m: M524 }
m2tcid M525 = { t: 110.136909, c: D Dbd, i: 525, m: M525 }
m2tcid M526 = { t: 110.227959, c: L Lwan, i: 526, m: M526 }
m2tcid M527 = { t: 110.442592, c: L Lna, i: 527, m: M527 }
m2tcid M528 = { t: 110.639338, c: L Lfeel, i: 528, m: M528 }
m2tcid M529 = { t: 111.065025, c: L Lyour, i: 529, m: M529 }
m2tcid M530 = { t: 111.283234, c: L Lbut, i: 530, m: M530 }
m2tcid M531 = { t: 111.462106, c: D Dcrunch, i: 531, m: M531 }
m2tcid M532 = { t: 111.558679, c: L Lter, i: 532, m: M532 }
m2tcid M533 = { t: 111.654592, c: D Dbd, i: 533, m: M533 }
m2tcid M534 = { t: 111.669572, c: L Lflies, i: 534, m: M534 }
m2tcid M535 = { t: 111.908773, c: D Dbd, i: 535, m: M535 }
m2tcid M536 = { t: 112.414668, c: D Dbd, i: 536, m: M536 }
m2tcid M537 = { t: 112.668849, c: D Dbd, i: 537, m: M537 }
m2tcid M538 = { t: 113.204357, c: D Dclap, i: 538, m: M538 }
m2tcid M539 = { t: 113.453602, c: D Dbd, i: 539, m: M539 }
m2tcid M540 = { t: 114.181596, c: D Dbd, i: 540, m: M540 }
m2tcid M541 = { t: 114.867639, c: D Dclap, i: 541, m: M541 }
m2tcid M542 = { t: 115.264951, c: D Dcrunch, i: 542, m: M542 }
m2tcid M543 = { t: 115.711618, c: D Dbd, i: 543, m: M543 }
m2tcid M544 = { t: 115.950993, c: D Dbd, i: 544, m: M544 }
m2tcid M545 = { t: 116.397661, c: D Dbd, i: 545, m: M545 }
m2tcid M546 = { t: 116.696262, c: D Dbd, i: 546, m: M546 }
m2tcid M547 = { t: 116.756356, c: L Llies, i: 547, m: M547 }
m2tcid M548 = { t: 117.139117, c: L Lyes, i: 548, m: M548 }
m2tcid M549 = { t: 117.476079, c: D Dbd, i: 549, m: M549 }
m2tcid M550 = { t: 117.793745, c: L Loh, i: 550, m: M550 }
m2tcid M551 = { t: 118.112117, c: L Li, i: 551, m: M551 }
m2tcid M552 = { t: 118.243558, c: D Dbd, i: 552, m: M552 }
m2tcid M553 = { t: 118.391139, c: L Lwan, i: 553, m: M553 }
m2tcid M554 = { t: 118.605771, c: L Lna, i: 554, m: M554 }
m2tcid M555 = { t: 118.813249, c: L Lfeel, i: 555, m: M555 }
m2tcid M556 = { t: 119.156660, c: L Lyour, i: 556, m: M556 }
m2tcid M557 = { t: 119.439259, c: L Lbut, i: 557, m: M557 }
m2tcid M558 = { t: 119.539141, c: D Dcrunch, i: 558, m: M558 }
m2tcid M559 = { t: 119.643160, c: L Lter, i: 559, m: M559 }
m2tcid M560 = { t: 119.761241, c: D Dbd, i: 560, m: M560 }
m2tcid M561 = { t: 119.861369, c: L Lflies, i: 561, m: M561 }
m2tcid M562 = { t: 120.015422, c: D Dbd, i: 562, m: M562 }
m2tcid M563 = { t: 120.516381, c: D Dbd, i: 563, m: M563 }
m2tcid M564 = { t: 120.758223, c: D Dbd, i: 564, m: M564 }
m2tcid M565 = { t: 121.345554, c: D Dclap, i: 565, m: M565 }
m2tcid M566 = { t: 121.550380, c: D Dbd, i: 566, m: M566 }

b2tcid :: Butterflyable -> NonEmptyArray TCID
b2tcid (L Lset) = fromNonEmpty (m2tcid M0 :| [])
b2tcid (D Dbd) = fromNonEmpty (m2tcid M1 :| [ m2tcid M3, m2tcid M5, m2tcid M7, m2tcid M9, m2tcid M10, m2tcid M11, m2tcid M13, m2tcid M21, m2tcid M23, m2tcid M25, m2tcid M26, m2tcid M28, m2tcid M37, m2tcid M50, m2tcid M58, m2tcid M60, m2tcid M61, m2tcid M67, m2tcid M72, m2tcid M73, m2tcid M82, m2tcid M84, m2tcid M94, m2tcid M95, m2tcid M98, m2tcid M99, m2tcid M103, m2tcid M104, m2tcid M105, m2tcid M113, m2tcid M132, m2tcid M141, m2tcid M147, m2tcid M150, m2tcid M152, m2tcid M154, m2tcid M160, m2tcid M169, m2tcid M181, m2tcid M195, m2tcid M199, m2tcid M201, m2tcid M208, m2tcid M210, m2tcid M212, m2tcid M214, m2tcid M218, m2tcid M228, m2tcid M231, m2tcid M232, m2tcid M235, m2tcid M239, m2tcid M244, m2tcid M246, m2tcid M247, m2tcid M249, m2tcid M252, m2tcid M255, m2tcid M258, m2tcid M260, m2tcid M267, m2tcid M273, m2tcid M276, m2tcid M277, m2tcid M283, m2tcid M284, m2tcid M285, m2tcid M286, m2tcid M287, m2tcid M288, m2tcid M292, m2tcid M298, m2tcid M300, m2tcid M301, m2tcid M303, m2tcid M305, m2tcid M311, m2tcid M312, m2tcid M315, m2tcid M318, m2tcid M319, m2tcid M320, m2tcid M321, m2tcid M322, m2tcid M324, m2tcid M325, m2tcid M326, m2tcid M327, m2tcid M336, m2tcid M352, m2tcid M360, m2tcid M370, m2tcid M378, m2tcid M380, m2tcid M382, m2tcid M384, m2tcid M389, m2tcid M406, m2tcid M418, m2tcid M432, m2tcid M433, m2tcid M434, m2tcid M443, m2tcid M445, m2tcid M446, m2tcid M449, m2tcid M453, m2tcid M456, m2tcid M465, m2tcid M467, m2tcid M469, m2tcid M470, m2tcid M476, m2tcid M479, m2tcid M487, m2tcid M489, m2tcid M491, m2tcid M494, m2tcid M497, m2tcid M498, m2tcid M499, m2tcid M504, m2tcid M506, m2tcid M507, m2tcid M508, m2tcid M513, m2tcid M516, m2tcid M517, m2tcid M518, m2tcid M519, m2tcid M521, m2tcid M524, m2tcid M525, m2tcid M533, m2tcid M535, m2tcid M536, m2tcid M537, m2tcid M539, m2tcid M540, m2tcid M543, m2tcid M544, m2tcid M545, m2tcid M546, m2tcid M549, m2tcid M552, m2tcid M560, m2tcid M562, m2tcid M563, m2tcid M564, m2tcid M566 ])
b2tcid (D Ddj) = fromNonEmpty (m2tcid M2 :| [ m2tcid M6, m2tcid M12, m2tcid M22, m2tcid M34, m2tcid M55, m2tcid M79, m2tcid M96, m2tcid M110, m2tcid M333 ])
b2tcid (D Dclap) = fromNonEmpty (m2tcid M4 :| [ m2tcid M8, m2tcid M14, m2tcid M24, m2tcid M31, m2tcid M41, m2tcid M64, m2tcid M87, m2tcid M102, m2tcid M140, m2tcid M157, m2tcid M162, m2tcid M204, m2tcid M265, m2tcid M307, m2tcid M317, m2tcid M328, m2tcid M368, m2tcid M438, m2tcid M474, m2tcid M483, m2tcid M511, m2tcid M538, m2tcid M541, m2tcid M565 ])
b2tcid (D Dhh) = fromNonEmpty (m2tcid M15 :| [ m2tcid M16, m2tcid M17, m2tcid M18, m2tcid M19, m2tcid M20, m2tcid M39, m2tcid M40, m2tcid M44, m2tcid M46, m2tcid M47, m2tcid M48, m2tcid M49, m2tcid M62, m2tcid M63, m2tcid M85, m2tcid M86, m2tcid M90, m2tcid M91, m2tcid M92, m2tcid M93, m2tcid M100, m2tcid M101, m2tcid M115, m2tcid M116, m2tcid M118, m2tcid M119, m2tcid M120, m2tcid M121, m2tcid M122, m2tcid M123, m2tcid M138, m2tcid M139, m2tcid M142, m2tcid M143, m2tcid M144, m2tcid M145, m2tcid M146, m2tcid M148, m2tcid M149, m2tcid M163, m2tcid M164, m2tcid M165, m2tcid M166, m2tcid M167, m2tcid M168, m2tcid M269, m2tcid M271, m2tcid M272, m2tcid M289, m2tcid M290, m2tcid M291, m2tcid M293, m2tcid M294, m2tcid M295, m2tcid M296, m2tcid M313, m2tcid M314, m2tcid M316, m2tcid M344, m2tcid M346, m2tcid M347, m2tcid M349, m2tcid M350, m2tcid M372, m2tcid M373, m2tcid M375, m2tcid M376, m2tcid M377, m2tcid M394, m2tcid M395, m2tcid M400, m2tcid M402, m2tcid M403, m2tcid M404, m2tcid M405 ])
b2tcid (L Lso) = fromNonEmpty (m2tcid M27 :| [ m2tcid M243 ])
b2tcid (L Ltake) = fromNonEmpty (m2tcid M29 :| [ m2tcid M245, m2tcid M257 ])
b2tcid (L Lme) = fromNonEmpty (m2tcid M30 :| [ m2tcid M126, m2tcid M248, m2tcid M259, m2tcid M354, m2tcid M363 ])
b2tcid (L Lto) = fromNonEmpty (m2tcid M32 :| [ m2tcid M250, m2tcid M261 ])
b2tcid (L Lyour) = fromNonEmpty (m2tcid M33 :| [ m2tcid M78, m2tcid M131, m2tcid M156, m2tcid M205, m2tcid M216, m2tcid M225, m2tcid M237, m2tcid M263, m2tcid M306, m2tcid M359, m2tcid M371, m2tcid M385, m2tcid M396, m2tcid M439, m2tcid M451, m2tcid M461, m2tcid M473, m2tcid M485, m2tcid M496, m2tcid M505, m2tcid M510, m2tcid M529, m2tcid M556 ])
b2tcid (L Lo) = fromNonEmpty (m2tcid M35 :| [ m2tcid M253, m2tcid M266 ])
b2tcid (L Lpen) = fromNonEmpty (m2tcid M36 :| [ m2tcid M254, m2tcid M268 ])
b2tcid (L Lskies) = fromNonEmpty (m2tcid M38 :| [ m2tcid M256, m2tcid M270 ])
b2tcid (D Dds) = fromNonEmpty (m2tcid M42 :| [ m2tcid M43, m2tcid M45, m2tcid M65, m2tcid M66, m2tcid M68, m2tcid M69, m2tcid M70, m2tcid M71, m2tcid M88, m2tcid M89 ])
b2tcid (L Li) = fromNonEmpty (m2tcid M51 :| [ m2tcid M74, m2tcid M274, m2tcid M297, m2tcid M379, m2tcid M391, m2tcid M523, m2tcid M551 ])
b2tcid (L Ljust) = fromNonEmpty (m2tcid M52 :| [ m2tcid M275 ])
b2tcid (L Lwa) = fromNonEmpty (m2tcid M53 :| [])
b2tcid (L Lna) = fromNonEmpty (m2tcid M54 :| [ m2tcid M76, m2tcid M202, m2tcid M213, m2tcid M223, m2tcid M234, m2tcid M279, m2tcid M302, m2tcid M448, m2tcid M459, m2tcid M471, m2tcid M481, m2tcid M493, m2tcid M501, m2tcid M527, m2tcid M554 ])
b2tcid (L Lfeel) = fromNonEmpty (m2tcid M56 :| [ m2tcid M77, m2tcid M203, m2tcid M215, m2tcid M224, m2tcid M236, m2tcid M280, m2tcid M304, m2tcid M383, m2tcid M393, m2tcid M437, m2tcid M450, m2tcid M460, m2tcid M472, m2tcid M482, m2tcid M495, m2tcid M502, m2tcid M509, m2tcid M528, m2tcid M555 ])
b2tcid (L La) = fromNonEmpty (m2tcid M57 :| [ m2tcid M124, m2tcid M281, m2tcid M351 ])
b2tcid (L Llive) = fromNonEmpty (m2tcid M59 :| [ m2tcid M282 ])
b2tcid (L Lwan) = fromNonEmpty (m2tcid M75 :| [ m2tcid M200, m2tcid M211, m2tcid M222, m2tcid M233, m2tcid M278, m2tcid M299, m2tcid M435, m2tcid M447, m2tcid M458, m2tcid M468, m2tcid M480, m2tcid M492, m2tcid M500, m2tcid M526, m2tcid M553 ])
b2tcid (L Lbut) = fromNonEmpty (m2tcid M80 :| [ m2tcid M158, m2tcid M206, m2tcid M217, m2tcid M226, m2tcid M240, m2tcid M308, m2tcid M387, m2tcid M398, m2tcid M441, m2tcid M452, m2tcid M463, m2tcid M475, m2tcid M486, m2tcid M512, m2tcid M530, m2tcid M557 ])
b2tcid (L Lter) = fromNonEmpty (m2tcid M81 :| [ m2tcid M159, m2tcid M207, m2tcid M219, m2tcid M229, m2tcid M241, m2tcid M309, m2tcid M388, m2tcid M399, m2tcid M442, m2tcid M454, m2tcid M464, m2tcid M477, m2tcid M488, m2tcid M514, m2tcid M532, m2tcid M559 ])
b2tcid (L Lflies) = fromNonEmpty (m2tcid M83 :| [ m2tcid M161, m2tcid M209, m2tcid M220, m2tcid M230, m2tcid M242, m2tcid M310, m2tcid M390, m2tcid M401, m2tcid M444, m2tcid M455, m2tcid M466, m2tcid M478, m2tcid M490, m2tcid M515, m2tcid M534, m2tcid M561 ])
b2tcid (D Delec) = fromNonEmpty (m2tcid M97 :| [ m2tcid M134, m2tcid M135, m2tcid M136, m2tcid M137 ])
b2tcid (L Ldo) = fromNonEmpty (m2tcid M106 :| [ m2tcid M329, m2tcid M338 ])
b2tcid (L Lyou) = fromNonEmpty (m2tcid M107 :| [ m2tcid M128, m2tcid M330, m2tcid M339, m2tcid M356, m2tcid M366 ])
b2tcid (L Le) = fromNonEmpty (m2tcid M108 :| [ m2tcid M331, m2tcid M340 ])
b2tcid (L Lver) = fromNonEmpty (m2tcid M109 :| [ m2tcid M332, m2tcid M341 ])
b2tcid (L Lfan) = fromNonEmpty (m2tcid M111 :| [ m2tcid M334, m2tcid M343 ])
b2tcid (L Lta) = fromNonEmpty (m2tcid M112 :| [ m2tcid M335, m2tcid M345 ])
b2tcid (L Lsize) = fromNonEmpty (m2tcid M114 :| [ m2tcid M337, m2tcid M348 ])
b2tcid (D Dsn) = fromNonEmpty (m2tcid M117 :| [ m2tcid M129, m2tcid M262, m2tcid M264, m2tcid M323, m2tcid M342, m2tcid M357, m2tcid M365, m2tcid M367, m2tcid M386, m2tcid M397 ])
b2tcid (L Lbout) = fromNonEmpty (m2tcid M125 :| [ m2tcid M353, m2tcid M362 ])
b2tcid (L Lwhen) = fromNonEmpty (m2tcid M127 :| [ m2tcid M355, m2tcid M364 ])
b2tcid (L Lclose) = fromNonEmpty (m2tcid M130 :| [ m2tcid M369 ])
b2tcid (L Leyes) = fromNonEmpty (m2tcid M133 :| [ m2tcid M361, m2tcid M374 ])
b2tcid (L Lthat) = fromNonEmpty (m2tcid M151 :| [])
b2tcid (L Lcan) = fromNonEmpty (m2tcid M153 :| [ m2tcid M381, m2tcid M392 ])
b2tcid (L Lfill) = fromNonEmpty (m2tcid M155 :| [])
b2tcid (D Dtm) = fromNonEmpty (m2tcid M170 :| [ m2tcid M171, m2tcid M172, m2tcid M173, m2tcid M174, m2tcid M175, m2tcid M176, m2tcid M177, m2tcid M178, m2tcid M179, m2tcid M180, m2tcid M182, m2tcid M183, m2tcid M184, m2tcid M185, m2tcid M186, m2tcid M187, m2tcid M188, m2tcid M189, m2tcid M190, m2tcid M191, m2tcid M192, m2tcid M193, m2tcid M194, m2tcid M196, m2tcid M197, m2tcid M198, m2tcid M407, m2tcid M408, m2tcid M409, m2tcid M410, m2tcid M411, m2tcid M412, m2tcid M413, m2tcid M414, m2tcid M415, m2tcid M416, m2tcid M417, m2tcid M419, m2tcid M420, m2tcid M421, m2tcid M422, m2tcid M423, m2tcid M424, m2tcid M425, m2tcid M426, m2tcid M427, m2tcid M428, m2tcid M429, m2tcid M430, m2tcid M431 ])
b2tcid (D Dfuzz) = fromNonEmpty (m2tcid M221 :| [])
b2tcid (D Dcrunch) = fromNonEmpty (m2tcid M227 :| [ m2tcid M238, m2tcid M440, m2tcid M457, m2tcid M462, m2tcid M484, m2tcid M503, m2tcid M531, m2tcid M542, m2tcid M558 ])
b2tcid (L Lthe) = fromNonEmpty (m2tcid M251 :| [])
b2tcid (L Lclosed) = fromNonEmpty (m2tcid M358 :| [])
b2tcid (L Llna) = fromNonEmpty (m2tcid M436 :| [])
b2tcid (L Llies) = fromNonEmpty (m2tcid M520 :| [ m2tcid M547 ])
b2tcid (L Loh) = fromNonEmpty (m2tcid M522 :| [ m2tcid M550 ])
b2tcid (L Lyes) = fromNonEmpty (m2tcid M548 :| [])

score :: Array TCID
score =
  [ m2tcid M0
  , m2tcid M1
  , m2tcid M2
  , m2tcid M3
  , m2tcid M4
  , m2tcid M5
  , m2tcid M6
  , m2tcid M7
  , m2tcid M8
  , m2tcid M9
  , m2tcid M10
  , m2tcid M11
  , m2tcid M12
  , m2tcid M13
  , m2tcid M14
  , m2tcid M15
  , m2tcid M16
  , m2tcid M17
  , m2tcid M18
  , m2tcid M19
  , m2tcid M20
  , m2tcid M21
  , m2tcid M22
  , m2tcid M23
  , m2tcid M24
  , m2tcid M25
  , m2tcid M26
  , m2tcid M27
  , m2tcid M28
  , m2tcid M29
  , m2tcid M30
  , m2tcid M31
  , m2tcid M32
  , m2tcid M33
  , m2tcid M34
  , m2tcid M35
  , m2tcid M36
  , m2tcid M37
  , m2tcid M38
  , m2tcid M39
  , m2tcid M40
  , m2tcid M41
  , m2tcid M42
  , m2tcid M43
  , m2tcid M44
  , m2tcid M45
  , m2tcid M46
  , m2tcid M47
  , m2tcid M48
  , m2tcid M49
  , m2tcid M50
  , m2tcid M51
  , m2tcid M52
  , m2tcid M53
  , m2tcid M54
  , m2tcid M55
  , m2tcid M56
  , m2tcid M57
  , m2tcid M58
  , m2tcid M59
  , m2tcid M60
  , m2tcid M61
  , m2tcid M62
  , m2tcid M63
  , m2tcid M64
  , m2tcid M65
  , m2tcid M66
  , m2tcid M67
  , m2tcid M68
  , m2tcid M69
  , m2tcid M70
  , m2tcid M71
  , m2tcid M72
  , m2tcid M73
  , m2tcid M74
  , m2tcid M75
  , m2tcid M76
  , m2tcid M77
  , m2tcid M78
  , m2tcid M79
  , m2tcid M80
  , m2tcid M81
  , m2tcid M82
  , m2tcid M83
  , m2tcid M84
  , m2tcid M85
  , m2tcid M86
  , m2tcid M87
  , m2tcid M88
  , m2tcid M89
  , m2tcid M90
  , m2tcid M91
  , m2tcid M92
  , m2tcid M93
  , m2tcid M94
  , m2tcid M95
  , m2tcid M96
  , m2tcid M97
  , m2tcid M98
  , m2tcid M99
  , m2tcid M100
  , m2tcid M101
  , m2tcid M102
  , m2tcid M103
  , m2tcid M104
  , m2tcid M105
  , m2tcid M106
  , m2tcid M107
  , m2tcid M108
  , m2tcid M109
  , m2tcid M110
  , m2tcid M111
  , m2tcid M112
  , m2tcid M113
  , m2tcid M114
  , m2tcid M115
  , m2tcid M116
  , m2tcid M117
  , m2tcid M118
  , m2tcid M119
  , m2tcid M120
  , m2tcid M121
  , m2tcid M122
  , m2tcid M123
  , m2tcid M124
  , m2tcid M125
  , m2tcid M126
  , m2tcid M127
  , m2tcid M128
  , m2tcid M129
  , m2tcid M130
  , m2tcid M131
  , m2tcid M132
  , m2tcid M133
  , m2tcid M134
  , m2tcid M135
  , m2tcid M136
  , m2tcid M137
  , m2tcid M138
  , m2tcid M139
  , m2tcid M140
  , m2tcid M141
  , m2tcid M142
  , m2tcid M143
  , m2tcid M144
  , m2tcid M145
  , m2tcid M146
  , m2tcid M147
  , m2tcid M148
  , m2tcid M149
  , m2tcid M150
  , m2tcid M151
  , m2tcid M152
  , m2tcid M153
  , m2tcid M154
  , m2tcid M155
  , m2tcid M156
  , m2tcid M157
  , m2tcid M158
  , m2tcid M159
  , m2tcid M160
  , m2tcid M161
  , m2tcid M162
  , m2tcid M163
  , m2tcid M164
  , m2tcid M165
  , m2tcid M166
  , m2tcid M167
  , m2tcid M168
  , m2tcid M169
  , m2tcid M170
  , m2tcid M171
  , m2tcid M172
  , m2tcid M173
  , m2tcid M174
  , m2tcid M175
  , m2tcid M176
  , m2tcid M177
  , m2tcid M178
  , m2tcid M179
  , m2tcid M180
  , m2tcid M181
  , m2tcid M182
  , m2tcid M183
  , m2tcid M184
  , m2tcid M185
  , m2tcid M186
  , m2tcid M187
  , m2tcid M188
  , m2tcid M189
  , m2tcid M190
  , m2tcid M191
  , m2tcid M192
  , m2tcid M193
  , m2tcid M194
  , m2tcid M195
  , m2tcid M196
  , m2tcid M197
  , m2tcid M198
  , m2tcid M199
  , m2tcid M200
  , m2tcid M201
  , m2tcid M202
  , m2tcid M203
  , m2tcid M204
  , m2tcid M205
  , m2tcid M206
  , m2tcid M207
  , m2tcid M208
  , m2tcid M209
  , m2tcid M210
  , m2tcid M211
  , m2tcid M212
  , m2tcid M213
  , m2tcid M214
  , m2tcid M215
  , m2tcid M216
  , m2tcid M217
  , m2tcid M218
  , m2tcid M219
  , m2tcid M220
  , m2tcid M221
  , m2tcid M222
  , m2tcid M223
  , m2tcid M224
  , m2tcid M225
  , m2tcid M226
  , m2tcid M227
  , m2tcid M228
  , m2tcid M229
  , m2tcid M230
  , m2tcid M231
  , m2tcid M232
  , m2tcid M233
  , m2tcid M234
  , m2tcid M235
  , m2tcid M236
  , m2tcid M237
  , m2tcid M238
  , m2tcid M239
  , m2tcid M240
  , m2tcid M241
  , m2tcid M242
  , m2tcid M243
  , m2tcid M244
  , m2tcid M245
  , m2tcid M246
  , m2tcid M247
  , m2tcid M248
  , m2tcid M249
  , m2tcid M250
  , m2tcid M251
  , m2tcid M252
  , m2tcid M253
  , m2tcid M254
  , m2tcid M255
  , m2tcid M256
  , m2tcid M257
  , m2tcid M258
  , m2tcid M259
  , m2tcid M260
  , m2tcid M261
  , m2tcid M262
  , m2tcid M263
  , m2tcid M264
  , m2tcid M265
  , m2tcid M266
  , m2tcid M267
  , m2tcid M268
  , m2tcid M269
  , m2tcid M270
  , m2tcid M271
  , m2tcid M272
  , m2tcid M273
  , m2tcid M274
  , m2tcid M275
  , m2tcid M276
  , m2tcid M277
  , m2tcid M278
  , m2tcid M279
  , m2tcid M280
  , m2tcid M281
  , m2tcid M282
  , m2tcid M283
  , m2tcid M284
  , m2tcid M285
  , m2tcid M286
  , m2tcid M287
  , m2tcid M288
  , m2tcid M289
  , m2tcid M290
  , m2tcid M291
  , m2tcid M292
  , m2tcid M293
  , m2tcid M294
  , m2tcid M295
  , m2tcid M296
  , m2tcid M297
  , m2tcid M298
  , m2tcid M299
  , m2tcid M300
  , m2tcid M301
  , m2tcid M302
  , m2tcid M303
  , m2tcid M304
  , m2tcid M305
  , m2tcid M306
  , m2tcid M307
  , m2tcid M308
  , m2tcid M309
  , m2tcid M310
  , m2tcid M311
  , m2tcid M312
  , m2tcid M313
  , m2tcid M314
  , m2tcid M315
  , m2tcid M316
  , m2tcid M317
  , m2tcid M318
  , m2tcid M319
  , m2tcid M320
  , m2tcid M321
  , m2tcid M322
  , m2tcid M323
  , m2tcid M324
  , m2tcid M325
  , m2tcid M326
  , m2tcid M327
  , m2tcid M328
  , m2tcid M329
  , m2tcid M330
  , m2tcid M331
  , m2tcid M332
  , m2tcid M333
  , m2tcid M334
  , m2tcid M335
  , m2tcid M336
  , m2tcid M337
  , m2tcid M338
  , m2tcid M339
  , m2tcid M340
  , m2tcid M341
  , m2tcid M342
  , m2tcid M343
  , m2tcid M344
  , m2tcid M345
  , m2tcid M346
  , m2tcid M347
  , m2tcid M348
  , m2tcid M349
  , m2tcid M350
  , m2tcid M351
  , m2tcid M352
  , m2tcid M353
  , m2tcid M354
  , m2tcid M355
  , m2tcid M356
  , m2tcid M357
  , m2tcid M358
  , m2tcid M359
  , m2tcid M360
  , m2tcid M361
  , m2tcid M362
  , m2tcid M363
  , m2tcid M364
  , m2tcid M365
  , m2tcid M366
  , m2tcid M367
  , m2tcid M368
  , m2tcid M369
  , m2tcid M370
  , m2tcid M371
  , m2tcid M372
  , m2tcid M373
  , m2tcid M374
  , m2tcid M375
  , m2tcid M376
  , m2tcid M377
  , m2tcid M378
  , m2tcid M379
  , m2tcid M380
  , m2tcid M381
  , m2tcid M382
  , m2tcid M383
  , m2tcid M384
  , m2tcid M385
  , m2tcid M386
  , m2tcid M387
  , m2tcid M388
  , m2tcid M389
  , m2tcid M390
  , m2tcid M391
  , m2tcid M392
  , m2tcid M393
  , m2tcid M394
  , m2tcid M395
  , m2tcid M396
  , m2tcid M397
  , m2tcid M398
  , m2tcid M399
  , m2tcid M400
  , m2tcid M401
  , m2tcid M402
  , m2tcid M403
  , m2tcid M404
  , m2tcid M405
  , m2tcid M406
  , m2tcid M407
  , m2tcid M408
  , m2tcid M409
  , m2tcid M410
  , m2tcid M411
  , m2tcid M412
  , m2tcid M413
  , m2tcid M414
  , m2tcid M415
  , m2tcid M416
  , m2tcid M417
  , m2tcid M418
  , m2tcid M419
  , m2tcid M420
  , m2tcid M421
  , m2tcid M422
  , m2tcid M423
  , m2tcid M424
  , m2tcid M425
  , m2tcid M426
  , m2tcid M427
  , m2tcid M428
  , m2tcid M429
  , m2tcid M430
  , m2tcid M431
  , m2tcid M432
  , m2tcid M433
  , m2tcid M434
  , m2tcid M435
  , m2tcid M436
  , m2tcid M437
  , m2tcid M438
  , m2tcid M439
  , m2tcid M440
  , m2tcid M441
  , m2tcid M442
  , m2tcid M443
  , m2tcid M444
  , m2tcid M445
  , m2tcid M446
  , m2tcid M447
  , m2tcid M448
  , m2tcid M449
  , m2tcid M450
  , m2tcid M451
  , m2tcid M452
  , m2tcid M453
  , m2tcid M454
  , m2tcid M455
  , m2tcid M456
  , m2tcid M457
  , m2tcid M458
  , m2tcid M459
  , m2tcid M460
  , m2tcid M461
  , m2tcid M462
  , m2tcid M463
  , m2tcid M464
  , m2tcid M465
  , m2tcid M466
  , m2tcid M467
  , m2tcid M468
  , m2tcid M469
  , m2tcid M470
  , m2tcid M471
  , m2tcid M472
  , m2tcid M473
  , m2tcid M474
  , m2tcid M475
  , m2tcid M476
  , m2tcid M477
  , m2tcid M478
  , m2tcid M479
  , m2tcid M480
  , m2tcid M481
  , m2tcid M482
  , m2tcid M483
  , m2tcid M484
  , m2tcid M485
  , m2tcid M486
  , m2tcid M487
  , m2tcid M488
  , m2tcid M489
  , m2tcid M490
  , m2tcid M491
  , m2tcid M492
  , m2tcid M493
  , m2tcid M494
  , m2tcid M495
  , m2tcid M496
  , m2tcid M497
  , m2tcid M498
  , m2tcid M499
  , m2tcid M500
  , m2tcid M501
  , m2tcid M502
  , m2tcid M503
  , m2tcid M504
  , m2tcid M505
  , m2tcid M506
  , m2tcid M507
  , m2tcid M508
  , m2tcid M509
  , m2tcid M510
  , m2tcid M511
  , m2tcid M512
  , m2tcid M513
  , m2tcid M514
  , m2tcid M515
  , m2tcid M516
  , m2tcid M517
  , m2tcid M518
  , m2tcid M519
  , m2tcid M520
  , m2tcid M521
  , m2tcid M522
  , m2tcid M523
  , m2tcid M524
  , m2tcid M525
  , m2tcid M526
  , m2tcid M527
  , m2tcid M528
  , m2tcid M529
  , m2tcid M530
  , m2tcid M531
  , m2tcid M532
  , m2tcid M533
  , m2tcid M534
  , m2tcid M535
  , m2tcid M536
  , m2tcid M537
  , m2tcid M538
  , m2tcid M539
  , m2tcid M540
  , m2tcid M541
  , m2tcid M542
  , m2tcid M543
  , m2tcid M544
  , m2tcid M545
  , m2tcid M546
  , m2tcid M547
  , m2tcid M548
  , m2tcid M549
  , m2tcid M550
  , m2tcid M551
  , m2tcid M552
  , m2tcid M553
  , m2tcid M554
  , m2tcid M555
  , m2tcid M556
  , m2tcid M557
  , m2tcid M558
  , m2tcid M559
  , m2tcid M560
  , m2tcid M561
  , m2tcid M562
  , m2tcid M563
  , m2tcid M564
  , m2tcid M565
  , m2tcid M566
  ]
