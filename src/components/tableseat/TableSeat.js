import './TableSeat.css'
import { ChairSVG } from '../../resources/ChairSVG';
import { PlateSVG } from '../../resources/PlateSVG';

const TableSeat =() => {
    const id = 77;
    
    return (
        <div className='tableBlock' id="table">
            <div className='firstTable'>
                <div className='chairArrLeft'>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(el =>(
                        <div className='chairDiv'>
                            <ChairSVG isActive={el === id}/>
                            <div className='plateDiv'>
                                <PlateSVG isActive={el === id}/>
                            </div>
                        </div> ))}
                </div>
                <div className='tableArr'>
                    <div className='table' id='first'>
                        <div className='tableBoard'>
                            <p>1</p>
                        </div>
                    </div>
                    <div className='table' id='second'>
                        <div className='tableBoard'>
                            <p>2</p>
                        </div>
                    </div>
                    <div className='table' id='third'>
                        <div className='tableBoard'>
                            <p>3</p>
                        </div>
                    </div>
                </div>
                
                <div className='chairArrRight'>
                    {[19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36].map(el =>(
                        <div className='chairDiv'>
                            <ChairSVG isActive={el === id}/>
                            <div className='plateDiv'>
                                <PlateSVG isActive={el === id}/>
                            </div>
                        </div> ))}
                    </div>
            </div>
            <div className='secondTable'>
                <div className='chairArrLeft'>
                    {[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56].map(el =>(
                        <div className='chairDiv'>
                            <ChairSVG isActive={el === id}/>
                            <div className='plateDiv'>
                                <PlateSVG isActive={el === id}/>
                            </div>
                        </div> ))}
                    </div>
                <div className='tableArr'>
                    <div className='table' id='fourth'>
                        <div className='tableBoard'>
                            <p>4</p>
                        </div>
                    </div>
                    <div className='table' id='fifth'>
                        <div className='tableBoard'>
                            <p>5</p>
                        </div>
                    </div>
                    <div className='table' id='sixth'>
                        <div className='tableBoard'>
                            <p>6</p>
                        </div>
                    </div>
                </div>
                <div className='chairArrRight'>
                    {[57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76].map(el =>(
                        <div className='chairDiv'>
                            <ChairSVG isActive={el === id}/>
                            <div className='plateDiv'>
                                <PlateSVG isActive={el === id}/>
                            </div>
                        </div> ))}
                    
                    {[77].map(el =>(
                        <div className='chairDiv' id='lastChair'>
                            <ChairSVG isActive={el === id}/>
                            <div className='plateDiv'>
                                <PlateSVG isActive={el === id}/>
                            </div>
                        </div> ))}
                </div>
            </div>
           
            
            
        </div>
    )
}
export default TableSeat;