import { DiaryEntry } from '../../types';
const diaryData = require('../services/diaries.json');

// casteo del json 
const diaries:Array<DiaryEntry> = diaryData as Array<DiaryEntry>

const getEntries =() => diaries;

const addEntry = () => null;
   

    

