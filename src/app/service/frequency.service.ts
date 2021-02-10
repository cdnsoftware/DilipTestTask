import { Injectable } from '@angular/core';
import { Result } from '../interface/result';

@Injectable({
  providedIn: 'root'
})
export class FrequencyService {

  constructor() { }

  getFrequency(words: string, word: string): number {
    let numOfCount = 0;
    const wordsArray = words.split(' ');
    for (const wordInArray of wordsArray) {
      if (wordInArray.toLowerCase() === word.toLowerCase()) {
        numOfCount++;
      }
    }
    return numOfCount;
  }

  getWord(array: any[]): string {
    if (array.length === 0) {
      return null;
    }
    const modeMap = {};
    let maxEl = array[0];
    let maxCount = 1;
    for (const item of array) {
      const el = item;
      if (modeMap[el] == null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
      }
      if (modeMap[el] > maxCount) {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl.toLowerCase();
  }

  calculateHighestFrequency(text: string): number {
    const words = text.split(' ');
    const result = this.getWord(words);
    return this.getFrequency(text, result);
  }


  calculateMostFrequentNWords(text: string, n: number): Result[] {
    const array = text.split(' ').sort();
    return this.calculateWordCounts(array, n);
  }

  calculateWordCounts(array, n): Result[] {
    if (array.length === 0) {
      return null;
    }
    const frequency = [];
    const f = [];
    for (const item of array) {
      const word = item.toLowerCase();
      if (!frequency[word]) {
        f.push(word);
        frequency[word] = 1;
      } else {
        frequency[word] = frequency[word] + 1;
      }
    }
    const final: Result[] = [];
    f.forEach((first) => {
      final.push({ word: first, count: frequency[first] });
    });

    return final.splice(0, n);
  }
}
