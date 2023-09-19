import Dexie, { type Table } from 'dexie';
export interface Scores {
  id?: number;
 score: number;
  name:string ; 
  
}
export interface Records {
  id?: number;
  name1:string;
  name2:string;
  score1: number;
  score2:number
  mode:string
  otherMode:string
  
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
 scores!: Table<Scores>; 
  records!: Table<Records>; // Declare the new table

// level=1 max=4 and min=2 ,level = n+1   max 2 and mind=0
  constructor() {
    super('EOO');
    this.version(1).stores({
     scores: '++id,score,name' ,
      records:'++id,name1,name2,score1,score2,mode,otherMode'
    });
    // Add the populate event handler to populate the scores table
    this.on('populate', async () => {
        // Check if the scores table is empty before populating
        const count = await db.scores.count();
        if (count === 0) {
          // Add initial data to the scores table
          await this.scores.bulkAdd([
            { score: 18, name: 'Pebble' },
            { score: 15, name: 'Olaf' },
            { score: 12, name: 'Flynn' },
            { score: 9, name: 'Mushu' },
            { score: 6, name: 'Elsa' },
            {score:3,name:"You"}

          ]);
        }
      });
    }
  }
  



export const db = new MySubClassedDexie();