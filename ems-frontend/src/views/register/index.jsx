import React from 'react'

export default function Register() {

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  return (
    <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <div className='card-body'>
                <form>
                    <h3>Đăng ký tài khoản</h3>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">User name</label>
                                <input type="text" class="form-control" id="validationCustom03" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">Password</label>
                                <input type="text" class="form-control" id="validationCustom03" required/>
                            
                        </div>
                    <div className='form-group mb-2'><button className='btn btn-success' >Sign up</button></div>
                    <div><p>Have already an account? <a href="/login">Login here</a></p></div>
                </form>           
            </div>
        </div>   
    </div>
  )
}
