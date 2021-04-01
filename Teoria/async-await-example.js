/* The first things you have to understand that async/await syntax is just syntactic sugar which is meant to augment promises. In fact the return value of an async function is a promise. async/await syntax gives us the possibility of writing asynchronous in a synchronous manner. Here is an example:

Promise chaining: */

function logFetch(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

// Async function:

async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}

/* In the above example the await waits for the promise (fetch(url)) to be either resolved or rejected. If the promise is resolved the value is stored in the response variable, and if the promise is rejected it would throw an error and thus enter the catch block.

We can already see that using async/await might be more readable than promise chaining. This is especially true when the amount of promises which we are using increases. Both Promise chaining and async/await solve the problem of callback hell and which method you choose is matter of personal preference.*/