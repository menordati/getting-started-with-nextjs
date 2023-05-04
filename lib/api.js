export async function fetchDados() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    const newData = data.slice(0, 10).map((item) => item.title);
    return newData;
  }
  