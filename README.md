# algdscollections

Collection of Algorithms and Data Structures that I deliberately write to spend some times during the weekend as an exercise for me to stay fit and sharp.
Some of the exercises here were taken from the frequently asked questions raised during the interview process with FAANG companies. I'll do my best to collect and solve those problems here.
For now, I have grouped the implementation written in two different languages, i.e. Java and Typescript since these two languages are the most spoken language for me in my daily jobs. Yet since I'm also working with Python and C++ in some cases, so I'm planning to write the Python and C++ version as well. Just stay tuned and watch this repository if you like it, and feel free to also contribute with your own solutions in your favourite languages :-).

## Running Application

### Java Version

1. Install **Java** and configure your JAVA_HOME path.
1. Install **Gradle** and configure your GRADLE_HOME path.
1. Enter application directory, i.e. the directory where the `build.gradle` file exists.
1. Running the application with command `gradle run`.
1. If the application need an argument, then you can invoke it from your terminal with this command `gradle run -PappArgs="['args1']"`. e.g. : `gradle run -PappArgs="['7']"`.

I'm assuming you execute all of those aforementioned steps from your terminal. Otherwise, you should adjust it accordingly based on how you're going to run the application (e.g., if you run it from a specific IDE).

### Typescript Version

1. Install **NodeJS**. I would recommend to use the latest LTS version.
1. Install the Typescript Compiler and `ts-node` (Hint: `ts-node` is used to run/invoke your typescript file directly without compiling it first).

```
# Local Installation
npm install -D typescript && npm install -D ts-node

# Global Installation
npm install -g typescript && npm install -g ts-node
```

1. Choose any `algds` folder you're looking to run by `cd` into the respective folder. E.g. `cd numeric-parser`.
1. Use `ts-node` to run the `ts` file directly. E.g. `ts-node index.ts`. You can also call `ts-node` directly with `npx` if you haven't installed `ts-node` before. E.g. `npx ts-node index.ts`.
