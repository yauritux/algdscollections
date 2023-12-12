package com.yauritux;

public class MaxContainedWater {

    int firstPoint;
    int secondPoint;
    private int[] data;

    public MaxContainedWater(String[] data) throws NumberFormatException {
        this.data = new int[data.length];
        for (int i = 0; i < data.length; i++) {
            this.data[i] = Integer.parseInt(data[i]);
        }
    }

    int largestContainer() {
        int maxVolume = Integer.MIN_VALUE;
        // TWO POINTER TECHNIQUES
        int firstPointer = 0;
        int secondPointer = this.data.length - 1;

        while (firstPointer < secondPointer) {
            int width = secondPointer - firstPointer;
            int currentVolume = width * this.data[firstPointer] * this.data[secondPointer];
            if (currentVolume > maxVolume) {
                maxVolume = currentVolume;
                this.firstPoint = firstPointer;
                this.secondPoint = secondPointer;
            }
            if (firstPointer < secondPointer) firstPointer++;
            else secondPointer--;
        }

        return maxVolume;
    }    
    
    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("Usage: java MaxContainedWater [array of numbers]");
            System.err.println("E.g.: java NumericParser 1 8 6 2 5 4 8 3 7");
            System.exit(1);
        }        

        MaxContainedWater container = new MaxContainedWater(args[0].split(" "));
        int result = container.largestContainer();
        System.out.println("From the given Array of [" + args[0] + "]");
        System.out.printf("Array with index %d and %d\n", container.firstPoint, container.secondPoint);
        System.out.printf("will create a bucket with volume of %d that has most water.", result);
    }
}
