import fs from 'fs'

export function parseLandlords(records: object[] ) {
  let landlords = new Object()

  records.forEach((item) => {
    const name: string = item.OWNER_NM
    const value: object = item

    // if (!Object.keys(landlords).includes(name)) {
    //   landlords[name] = value
    //   } else {
    //       let arr: object[] = []
    //       // if (landlords[name].length > 1) {
    //       //   arr = [...landlords[name], value]
    //       // } else {
    //       //   arr = [landlords[name], value]
    //       // }
    //       landlords[name] = [...landlords[name], value]
    //     }
      if (!landlords[name]) {
        landlords[name] = value
      }
      else if (landlords[name]?.length > 1) {
        landlords[name] = [...landlords[name], value]
      } else {
        landlords[name] = [landlords[name], value]
      }
      })

    return landlords
    }

    export function foo() {

    }