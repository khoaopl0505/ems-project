//90
import React from 'react'

export default function Login() {
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
                        <h3>Đăng nhập</h3>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">User name</label>
                                <input type="text" class="form-control" id="validationCustom03" required/>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">Password</label>
                                <input type="text" class="form-control" id="validationCustom03" required/>
                        </div>
                        <div class="col-12"><button className='btn btn-success' >Sign in</button></div>
                        
                        <div><p>Don't have an account? <a href="/register">Register</a></p></div>
                    </form>           
                </div>
            </div>   
        </div>
  )
}
