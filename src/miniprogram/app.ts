import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

// app.js
declare const App: any
declare const console: any

App({
  onLaunch() {

    const ob1 = new Observable()

    ob1.pipe(filter(s => !!s)).subscribe(s => console.info(s))
  }
});

