export default class MaxContainedWater {
  private firstPoint: number;
  private secondPoint: number;

  constructor(public data: number[]) {
    this.firstPoint = data[0];
    this.secondPoint = data[data.length - 1];
  }

  get coordinate(): number[] {
    return [this.firstPoint, this.secondPoint];
  }

  largestContainer(): number {
    let volume = Number.MIN_VALUE;
    let startIndex = 0;
    let endIndex = this.data.length - 1;
    while (startIndex < endIndex) {
      let width = endIndex - startIndex;
      let newVolume = width * (this.data[startIndex] * this.data[endIndex]);
      if (newVolume > volume) {
        volume = newVolume;
        this.firstPoint = this.data[startIndex];
        this.secondPoint = this.data[endIndex];
      }
      if (startIndex < endIndex) startIndex++;
      else endIndex--;
    }
    return volume;
  }
}
