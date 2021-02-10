import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Result } from './interface/result';
import { FrequencyService } from './service/frequency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  frequency = 0;
  word = '';
  result: Result[];
  gridForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private frequencyService: FrequencyService) {
  }

  ngOnInit() {
    this.gridForm = this.formBuilder.group({
      inputText: [''],
      frequencyWord: [''],
      frequency: [0]
    });
  }

  inputChange() {
    let words = this.Text.value.split(' ');
    this.word = this.frequencyService.getWord(words);
    words = words.map((x) => x.toLowerCase());
    this.frequency = this.frequencyService.getFrequency(this.Text.value, this.word);
  }

  frequecyCountChange() {
    this.result = this.frequencyService.calculateMostFrequentNWords(this.Text.value, this.FrequencyInput.value);
  }

  calculateFrequencyForWord(text: string, word: string) {
    this.frequency = this.frequencyService.getFrequency(text, word);
    this.word = word;
    const textArray = text.split(' ');
    const wordsWithCount = this.frequencyService.calculateWordCounts(textArray, textArray.length);
    this.result = wordsWithCount.filter(m => m.word === word);
    this.FrequencyInput.setValue(0);
  }

  frequecyWordChange() {
    this.calculateFrequencyForWord(this.Text.value, this.FrequencyWord.value);
  }

  get Text(): AbstractControl {
    return this.gridForm.controls.inputText;
  }

  get FrequencyInput(): AbstractControl {
    return this.gridForm.controls.frequency;
  }

  get FrequencyWord(): AbstractControl {
    return this.gridForm.controls.frequencyWord;
  }
}
