import { app, dialog } from 'electron';

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const userDataPath = app.getPath('userData');
const sqliteDbPath = path.join(userDataPath, 'moneymentor.sqlite3');

function showerror(msg: any) {
  dialog.showMessageBox({
    title: 'error',
    message: msg,
    type: 'none',
    buttons: [],
  });
}

const openDb = () => {
  return new sqlite3.Database(sqliteDbPath, (err: any) => {
    if (err) {
      throw err.message;
    }
  });
};

const closeDb = (db) => {
  db.close((err: any) => {
    if (err) {
      throw err.message;
    }
  });
};

const CheckTableDb = () => {
  const db = openDb();
  db.run(
    `CREATE TABLE IF NOT EXISTS RiskProfileQuestions("id"	INTEGER,
  "question" TEXT NOT NULL,
	"is_active" BOOLEAN NOT NULL,
	"created_at" DATETIME,
	"updated_at" DATETIME,
	PRIMARY KEY("id" AUTOINCREMENT));`,
    (err: any) => {
      if (err) {
        return showerror(err.message);
      }
      return null;
    }
  );
  setTimeout(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS RiskProfileQuestionAnswer("id"	INTEGER,
      "question_id" INTEGER,
      "answer" TEXT NOT NULL,
      "points" TINYINT NOT NULL,
      "created_at" DATETIME,
      "updated_at" DATETIME,
      FOREIGN KEY("question_id") REFERENCES "RiskProfileQuestions"("id"),
      PRIMARY KEY("id" AUTOINCREMENT));`,
      (err: any) => {
        if (err) {
          return showerror(err.message);
        }
        return null;
      }
    );

    closeDb(db);
  }, 500);
};

const insertabledb = () => {};

export { CheckTableDb, insertabledb };
