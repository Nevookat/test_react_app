import {useForm} from 'react-hook-form'

function App(){
  //register региструє кожен imput для ініціалізації у формі (useForm)
  //handleSubmit функція, яка дозволяє виконувати подальщі дії з даними 
 // formState  - дані про кожний зареєстрований input

  let {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm()

    return(
        <div>
          <form onSubmit={handleSubmit((data)=>console.log(data))}>

            <div>
              <label>
                  Name:
                  <input {...register('first_name',{
                  required: true
                  })}/> 
                  
              </label>
              <div>{errors?.first_name && <p>Field "Name" can't be empty</p>}</div>
            </div>

            <div>
              <label>
                  Surname:
                  <input {...register('last_name',{
                  required: true
                  })}/>
              </label>
              <div>{errors?.last_name && <p>Field "Last_Name" can't be empty</p>}</div>
            </div>

            <div>
              <label>
                  <input type={'submit'}/>
              </label>
            </div>

          </form>  
        </div>
    )
}

export default App