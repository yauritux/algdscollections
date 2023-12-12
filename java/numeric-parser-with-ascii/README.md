# Numeric Parser (With ASCII)

As the name implies, this is just a simple algorithm for parsing any decimal numbers you provided as string into its numeric type (i.e., `Integer`).
I know that this seems like we're duplicating our `numeric-parser` project, but it's actually not. The implementation would be slightly different because this particular one internally utilizes ASCII decimal code within its math conversion.

## How does it work ?

TLDR; A string that represents "1045779" will be parsed to its numerical type using this following basic math operation:

```
1 x 10^6 = 1000000
0 x 10^5 =       0
4 x 10^4 =   40000
5 x 10^3 =    5000
7 x 10^2 =     700
7 x 10^1 =      70
9 x 10^0 =       9
------------------ +
           1045779
```

## Run the Sample

`gradle run -PappArgs="['1045779']"`
