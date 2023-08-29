import React from 'react'
import { QuranPak } from '../../utils/image'

export default function Quran() {
    const quranpakArr = [
        {
            name: "Para # 1",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._01_aks.pdf"
        },
        {
            name: "Para # 2",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._02_aks.pdf"
        },
        {
            name: "Para # 3",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._03_aks.pdf",
        },
        {
            name: "Para # 4",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._04_aks.pdf",
        },
        {
            name: "Para # 5",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._05_aks.pdf",
        },
        {
            name: "Para # 6",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._06_aks.pdf",
        },
        {
            name: "Para # 7",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._07_aks.pdf",
        },
        {
            name: "Para # 8",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._08_aks.pdf",
        },
        {
            name: "Para # 9",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._09_aks.pdf",
        },
        {
            name: "Para # 10",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._10_aks.pdf",
        },
        {
            name: "Para # 11",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._11_aks.pdf",
        },
        {
            name: "Para # 12",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._12_aks.pdf",
        },
        {
            name: "Para # 13",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._13_aks.pdf",
        },
        {
            name: "Para # 14",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._14_aks.pdf",
        },
        {
            name: "Para # 15",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._15_aks.pdf",
        },
        {
            name: "Para # 16",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._16_aks.pdf",
        },
        {
            name: "Para # 17",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._17_aks.pdf",
        },
        {
            name: "Para # 18",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._18_aks.pdf",
        },
        {
            name: "Para # 19",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._19_aks.pdf",
        },
        {
            name: "Para # 20",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._20_aks.pdf",
        },
        {
            name: "Para # 21",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._21_aks.pdf",
        },
        {
            name: "Para # 22",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._22_aks.pdf",
        },
        {
            name: "Para # 23",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._23_aks.pdf",
        },
        {
            name: "Para # 24",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._24_aks.pdf",
        },
        {
            name: "Para # 25",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._25_aks.pdf",
        },
        {
            name: "Para # 26",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._26_aks.pdf",
        },
        {
            name: "Para # 27",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._27_aks.pdf",
        },
        {
            name: "Para # 28",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._28_aks.pdf",
        },
        {
            name: "Para # 29",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._29_aks.pdf",
        },
        {
            name: "Para # 30",
            link:"http://www.alkalam.weebly.com/uploads/4/0/4/7/4047528/para_no._30_aks.pdf",
        },
    ]

  return (
    <div>
        <h3 className='text-center p-2 ms-2 me-2 mt-3 fw-bold fs-2  mb-2 bg-light shadow border-2 text-black'>Quran Pak</h3>
        <div className="row container-fluid flex justify-content-center">
        {quranpakArr.map((item ,i) => (
            // <div key={i} className='bg-dark opacity-75 text-white p-2 mt-2 ms-3 me-3'  style={{borderRadius:"10px" , cursor:"pointer"}}>
            //    <a href={item.link} target='_blank' className='text-white text-decoration-none'>{item.name}</a> 
            // </div>
            <div key={i} className="col-lg-3 mt-2 shadow  col-sm-12">
                {/* <div className='flex'>
                <img src={QuranPak} alt="" className='w-50' style={{height:"auto"}} />
                <a href={item.link} target='_blank' className='text-decoration-none'>{item.name}</a> 
                </div> */}
              <div>
                <img src={QuranPak} alt="" />
               <p><a href={item.link} target='_blank' rel="noopener noreferrer" className='text-decoration-none text-black fs-5 fw-bold'>{item.name}</a></p>  
              </div>
            </div>
        ))}
        </div>
       
    </div>
  )
}
