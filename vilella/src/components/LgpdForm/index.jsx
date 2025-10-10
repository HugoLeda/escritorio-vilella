import { Forms } from './style';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';


export default function LgpdForm({ onSubmit }) {

  const [submitStatus, setSubmitStatus] = useState('');
  const [formError, setFormError] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0); // controle de tempo entre envios

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const watchedFields = watch();

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const allFieldsFilled =
      watchedFields.name &&
      watchedFields.email &&
      watchedFields.subject &&
      watchedFields.message &&
      watchedFields.consent;

    if (!hasErrors && allFieldsFilled) {
      setFormError(false); // limpa a mensagem de erro quando tudo está certo
    }
  }, [errors, watchedFields]);


  const submitForm = async (data) => {

    const now = Date.now();

    // Bloqueio de reenvio em menos de 1 minuto
    if (now - lastSubmitTime < 60000) {
      setFormError(true);
      setSubmitStatus('error');
      toast.warn('Aguarde alguns segundos antes de enviar novamente.', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }

    setFormError(false);

    console.log('Formulário enviado:', data);    

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          consent: data.consent
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      console.log('EmailJS result:', result.text);
      setSubmitStatus('success');
      setFormError(false);
      setLastSubmitTime(now);

      setSubmitStatus('success');
      toast.success('Solicitação enviada! Em breve responderemos.', {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
      });

      setLastSubmitTime(now);
      reset();

      if (onSubmit) {
        onSubmit(data);
      }
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      setSubmitStatus('error');
      toast.error('Ocorreu um erro ao enviar. Tente novamente.', {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
      });
    }
  };

  const onError = () => {
    setFormError(true);
    setSubmitStatus('error');
  };

  return (
    <Forms>
      <form onSubmit={handleSubmit(submitForm,onError)}>
        <div className="form-fill">
          <div className="form-item">
            <label htmlFor="name" className="required">Nome completo:</label>
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
            {errors.name && errors.name.type === 'pattern' && (<p className="error-message">{errors.name.message}</p>)}
          </div>

          <div className="form-item">
            <label htmlFor="email" className="required">E-mail:</label>
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
          </div>

          <div className="form-item">
            <label htmlFor="subject" className="required">Assunto:</label>
            <select
              id="subject"
              defaultValue=""
              {...register('subject', {
                required: true
              })}
            >
              <option value="" disabled>Selecione um assunto</option>
              <option value="Acesso aos Meus Dados">Acesso aos Meus Dados</option>
              <option value="Correção ou Atualização de Dados">Correção ou Atualização de Dados</option>
              <option value="Dúvidas sobre a Política de Privacidade">Dúvidas sobre a Política de Privacidade</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="message" className="required">Mensagem:</label>
            <textarea
              id="message"
              placeholder="Deixe sua mensagem..."
              rows={3}
              maxLength={300}
              {...register('message', {
                required: true,
                maxLength: {
                  value: 300,
                },
                validate: value => /\p{L}+/u.test(value)
              })}
            ></textarea>
          </div>                    
        </div>

        <div className="form-consent">
          <div className="form-item">
            <label htmlFor="consent" className="required consent-label">
              <input
                type="checkbox"
                {...register('consent', { required: true })}
              />
              <span>
                Li e aceito a&nbsp;
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Política de Privacidade
                </a>.
              </span>
            </label>
            {errors.consent && errors.consent.type === 'required'}
          </div>
        </div>  
        {formError && (
            <p className="error-message global-error">
              Por favor, preencha todos os campos corretamente.
            </p>
          )}


        <div className="form-send">
          <button className="mail" type="submit" disabled={submitStatus === 'loading'}>Enviar solicitação</button>
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
