# Numeric Parser

As the name implies, this is just a simple algorithm for parsing any decimal numbers you provided as string into its numeric type (i.e., `Integer`).

## How does it work ?

TLDR; A string that represents "5432" will be parsed to its numerical type using this following basic math operation:

```
5 x 10^3 = 5000
4 x 10^2 =  400
3 x 10^1 =   30
2 x 10^0 =    2
--------------- +
           5432
```

## Run the Sample

`gradle run -PappArgs="['5432']"`
