import Dexie, { type Table } from 'dexie';
export interface Scores {
  id?: number;
 score: number;
  name:string ; 
  
}
export interface Records {
  id?: number;
  blue: number;
  red:number
  
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
      records:'++id,blue,red'
    });
    // Add the populate event handler to populate the scores table
    this.on('populate', async () => {
        // Check if the scores table is empty before populating
        const count = await db.scores.count();
        if (count === 0) {
          // Add initial data to the scores table
          await this.scores.bulkAdd([
            { score: 1, name: 'Pebble' },
            { score: 1, name: 'Olaf' },
            { score: 1, name: 'Flynn' },
            { score: 1, name: 'Mushu' },
            { score: 1, name: 'Elsa' },
            {score:1,name:"You"}

          ]);
        }
      });
    }
  }
  



export const db = new MySubClassedDexie();