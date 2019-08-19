import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

declare const Page: any
declare const console: any

Page({
  onLoad() {
    // @ts-ignore
    console.info(123)

    const ob = new Observable()

    ob.pipe(
      map(t => {
        console.info(t)
      })
    )
  }
});

