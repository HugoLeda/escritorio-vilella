import { Forms } from './style';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Theme from '../../styles/theme';

export default function LgpdForm({ onSubmit }) {

  const [submitStatus, setSubmitStatus] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const submitForm = (data) => {
    console.log('Formulário enviado:', data);    
    
    try {
      // Simulando a execução de uma função de envio (ex. uma requisição HTTP)
      // Aqui você pode realizar o envio para o servidor
      // await someApiCall(data);
      

      // Se tudo correr bem, exibe uma mensagem de sucesso
      setSubmitStatus('success');
      toast.success('Solicitação enviada!', {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
      })
      
      reset();
      
      // Chama a função de retorno (se existir)
      if (onSubmit) {
        onSubmit(data);
      }
    } catch (error) {
      // Caso ocorra algum erro, exibe uma mensagem de erro
      setSubmitStatus('error');
      toast.error('Ocorreu um erro ao enviar. Tente novamente.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        draggable: true,
      });
    }
  };


  return (
    <Forms>
      <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-fill">
            <div className="form-item">
              <label htmlFor="name" class="required">Nome completo:</label>
              <input
                id="name"
                type="text"
                placeholder="Digite seu nome..."
              {...register('name', {
                required: true,
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ]{2,}( [a-zA-ZÀ-ÿ]{1,})+$/,
                  message: 'Por favor, informe seu nome completo.'
                },
              })}                         
              />
            {errors.name && errors.name.type === 'required' && (<p className="error-message">{errors.name.message}</p>)}
            {errors.name && errors.name.type === 'pattern' && (<p className="error-message">{errors.name.message}</p>)}
            </div>

            <div className="form-item">
              <label htmlFor="email" class="required">E-mail:</label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail..."
                {...register('email', {
                  required: true,                
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  },
                })}
            />
            {errors.email && errors.email.type === 'required' && <p>{errors.email.message}</p>}
            {errors.email && errors.email.type === 'pattern' && <p>{errors.email.message}</p>}
            </div>

            <div className="form-item">
              <label htmlFor="subject" class="required">Assunto:</label>
              <select
                id="subject"
                defaultValue=""
                {...register('subject', {
                  required: true
                })}
              >
                <option value="" disabled>Selecione um assunto</option>
                <option value="data-access">Acesso aos Meus Dados</option>
                <option value="data-update">Correção ou Atualização de Dados</option>
                <option value="about-policy">Dúvidas sobre a Política de Privacidade</option>
                <option value="other">Outro</option>
              </select>
            {errors.subject && errors.subject.type === 'required' && <p>{errors.subject.message}</p>}
            </div>

            <div className="form-item">
              <label htmlFor="message" class="required">Mensagem:</label>
              <textarea
                id="message"
                placeholder="Deixe sua mensagem..."
                rows={3}
                {...register('message',{
                  required: true
                })}
              ></textarea>
            {errors.message && errors.message.type === 'required' && <p>{errors.message.message}</p>}
            </div>
          </div>
          <div className="form-send">
            <button className="mail" type="submit">Enviar solicitação</button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              draggable
            />
          </div>
        </form>          
    </Forms>
  );
}
