 import Image from "next/image"
 export default function TextImageBox(){
    return(
       <div>
           <div className="text">
              <h1>Title</h1>
               <p>lfksjflkjl ; ljkfalsj  lkfjslkfj</p>
           </div>
           <div className="image">
              <Image src="#" alt="Heroes-image" width="400" height="400" ></Image>
           </div>
       </div>
    )
}