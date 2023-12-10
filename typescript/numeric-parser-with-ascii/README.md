# Numeric Parser (With ASCII)

As the name implies, this is just a simple algorithm for parsing any decimal numbers you provided as string into its numeric type (i.e., `Number`).
I know that this seems like we're duplicating our `numeric-parser` project, but it's actually not. The implementation would be slightly different because this particular one internally utilizes ASCII decimal code within its math conversion.

## How does it work ?

TLDR; A string that represents "1045" will be parsed to its numerical type using this following basic math operation:

```
1 x 10^3 = 1000
0 x 10^2 =    0
4 x 10^1 =   40
5 x 10^0 =    5
--------------- +
           1045
```

## Run the Sample

`npx ts-node index.ts`
