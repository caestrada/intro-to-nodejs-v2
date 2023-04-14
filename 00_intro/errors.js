import {readFile} from 'fs/promises';

try {
    const result = await readFile(new URL('app.js', import.meta.url), 'utf-8');
    console.log(result);    
} catch (error) {
    console.error(error);
}
