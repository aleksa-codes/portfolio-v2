import PageTransition from '../components/PageTransition';
import Avatar from '../components/utilities/Avatar';
import { Send, Eraser } from 'tabler-icons-react';

const Contact = () => {
  return (
    <PageTransition>
      <h1>Contact me</h1>
      <div className='flex flex-col items-center h-full justify-center'>
        <div className='mt-[-36px] flex flex-row items-center justify-center gap-4'>
          <Avatar width={180} height={180} />
          <p>
            Feel free to reach out to me at any time, I am always interested in{' '}
            <span className='highlight'>new stuff</span>!
          </p>
        </div>
        <form
          className='flex flex-col items-center justify-center w-full'
          target='_blank'
          action='https://formsubmit.co/9f2e38d7a97aa8e4fad043b4b83b9558'
          method='POST'
        >
          <div className='form-group flex flex-row items-center justify-between w-full gap-4'>
            <div className='form-label w-full'>
              <label htmlFor='name-field'>
                Name
                <div id='name-field'>
                  <input
                    type='text'
                    name='name'
                    className='input input-bordered w-full'
                    placeholder='e.g. Bon Jovi'
                    required
                  ></input>
                </div>
              </label>
            </div>
            <div className='form-label w-full'>
              <label htmlFor='email-field'>
                Email
                <div id='email-field'>
                  <input
                    type='email'
                    name='email'
                    className='input input-bordered w-full'
                    placeholder='e.g. bon.jovi@gmail.com'
                    required
                  ></input>
                </div>
              </label>
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor='subject-field'>
              Subject
              <div id='subject-field'>
                <input
                  type='text'
                  name='_subject'
                  className='input input-bordered w-full'
                  placeholder="e.g. Let's Connect!"
                  required
                ></input>
              </div>
            </label>
          </div>
          <div className='w-full'>
            <label htmlFor='message-field'>
              Message
              <div id='message-field'>
                <textarea
                  placeholder='Your Message Here'
                  className='textarea textarea-bordered w-full'
                  name='message'
                  rows={5}
                  required
                ></textarea>
              </div>
            </label>
          </div>
          <div className='form-group flex flex-row items-center justify-start gap-2 w-full my-2'>
            <button type='submit' className='btn btn-primary'>
              Send
              <Send size={20} strokeWidth={2} />
            </button>
            <button type='reset' className='btn btn-secondary'>
              Clear
              <Eraser size={20} strokeWidth={2} />
            </button>
          </div>
        </form>
      </div>
    </PageTransition>
  );
};

export default Contact;
