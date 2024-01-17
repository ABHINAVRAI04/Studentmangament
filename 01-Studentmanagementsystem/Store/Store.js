import {configureStore} from '@reduxjs/toolkit'
import Teachers from '../src/components/Teachers/TRedux/TeacherSlices';
import Students from '../src/page/Dashboard/SRedux/StudentSlices';

//store
export const store = configureStore({
    reducer:{
        Teachers:Teachers,
        Students:Students,      
    },
});

