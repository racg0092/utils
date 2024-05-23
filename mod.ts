// mod.ts
/**
 * @module
 *
 * This module contain the most used utilities
 *
 * ```ts
 * import utils from "@cgrichard/utils"
 * 
 *
 * const e = err(new Error("Oops something went worng")) 
 * const v = val("Yay Bon Bojage")
 * ```
 * */


/**
 * Class for result that may return a value or an error. Usally utilize when working with promises
 * and you want to handle your error without a try catch, because there may be some procedural handling
 * you may need to do.
 *
 *
 * @example Raw utilization of the class 
 * ```ts
 * // a result that resolves to a value
 * const rslt = new Result<string>("Hello world");
 * if(rslt.error) {
 *  //handle the error
 * }
 * console.log(rslt.value)
 *
 * const rslt2 = new Result<string>(null, new Error("Could not get a network connection"))
 * if(rslt.error) {
 *  //handle the error
 * }
 *  // handle the value
 * ```
 * 
 * @example Using with convinience {@linkcode val} and/or {@linkcode err} functions 
 * ```ts
 * // this are shorthands for the above example
 * const errorResult = err(new Error("Something went wrong"))
 * const valueResult = val<string>("Okki Dokkie")
 * ```
 * */
export class Result<T> {

  /**
   * @param value Aribitrary Value
   * @param error Error
   * @return A result that needs to be checked to see if it contains an error
   * */
  constructor(public value: T | null, public error: Error | null = null) {}
}


/**
 * Generates a {@linkcode Result} that holds a value
 * @param v Value
 * @returns A {@linkcode Result} that holds to a value
 * */
export function val<T>(v: T): Result<T> {
  return new Result<T>(v, null)
}


/**
 * Generates a {@linkcode Result} that holds an error
 * @param e Error
 * @returns A {@linkcode Result} that holds an error
 * */
export function err(e: Error): Result<any> {
  return new Result<any>(null, e)
}
