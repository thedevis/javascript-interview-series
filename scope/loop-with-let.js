for (let i=0; i<10; i++) {
    console.log( i );
}
console.log( i ); // ReferenceError


/** this loop works like.*/
{
    let j;
    for(j=0;i<10;i++){
        let i=j;
        console.log(j);
    }
}


