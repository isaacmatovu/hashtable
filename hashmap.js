
class Hashtable{
    constructor(initialcapacity = 7,loadFactor = 0.8){
        this.bucket = new Array(initialcapacity)
        this.size = 0;

    }

    hash(key){
        let primenumber = 31;
        let hash = 0;
        for(let i=0;i < key.length;i++){
            hash =+ primenumber * hash + key.charCodeAt(i)
        }
        return hash % this.bucket.length
    }

    set(key,value){
        let  index = this.hash(key)
        if(!this.bucket[index]){
            this.bucket[index] = [[key,value]]
        }else{
                this.bucket[index].push([key,value])
            
        }
        this.size++
    }

    get(key){
        let  index = this.hash(key)
        if(this.bucket[index]){
            for(let i = 0; i < this.bucket[index].length;i++){
                if(this.bucket[index][i][0]===key){
                    return this.bucket[index][i][1]
                }
            }
        }
            return `not found try searching again`
        
    }

    keys(){

    
        let allkeys = []
        for(let i = 0;i<this.bucket.length;i++){
            if(this.bucket[i]){
                for(let j=0; j<this.bucket[i].length; j++){
                    allkeys.push(this.bucket[i][j][0])
                }
            }
        }
        return allkeys;
    }

    display(){
        for(let i =0;i<this.bucket.length;i++){
            if(this.bucket[i]){
                console.log(i,this.bucket[i])
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
      
        if (this.bucket[index] && this.bucket[index].length) {
          for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[index][i][0] === key) {
              this.bucket[index].splice(i, 1);
              this.size--;
              return true;
            }
          }
        } else {
          return false;
        }
      }

    length(){
        return this.size;
    }

    resize() {
        const newCapacity = this.buckets.length * 2;
        const newBuckets = new Array(newCapacity).fill(null).map(() => []);
        
        for (const bucket of this.buckets) {
          for (const [key, value] of bucket) {
            const newIndex = this.hash(key) % newCapacity;
            newBuckets[newIndex].push([key, value]);
          }
        }
        
        this.buckets = newBuckets;
      }
   
   
}


const head = new Hashtable();
head.set('apple', 'red')
head.set('banana', 'yellow')
head.set('carrot', 'orange')
head.set('dog', 'brown')
head.set('elephant', 'gray')
head.set('frog', 'green')
head.set('grape', 'purple')
head.set('hat', 'black')
head.set('ice cream', 'white')
head.set('jacket', 'blue')
head.set('kite', 'pink')
head.set('lion', 'golden')

console.log(head.get('apple'))
console.log(head.display())
console.log(head.remove('apple'))
console.log(head.display())
console.log(head.keys())
console.log(head.length());
console.log(head.get('apple'))


