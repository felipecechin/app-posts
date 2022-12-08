import InputGroup from '@/components/shared/InputGroup'
import { IoMdSend } from 'react-icons/io'
import SimpleModal from '@/components/shared/SimpleModal'

interface IModalContactFormProps {
    open: boolean
    onClose: () => void
}

function ModalContactForm({ open, onClose }: IModalContactFormProps): JSX.Element {
    return (
        <SimpleModal
            onClose={onClose}
            open={open}
            title='Contact'
        >
            <div className='space-y-8'>
                <InputGroup
                    label='Name'
                    placeholder='Fill your full name'
                />
                <InputGroup
                    label='E-mail'
                    placeholder='Fill a valid e-mail'
                />
                <InputGroup
                    label='Phone'
                    placeholder='Fill your phone'
                />
                <div className='space-y-1'>
                    <label>Post</label>
                    <textarea
                        className='w-full border border-text-color p-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-text-gradient'
                        placeholder='Hello...'
                        rows={3}
                    ></textarea>
                </div>
                <span className='flex items-center justify-center'>
                    <button className='flex items-center bg-[#2d2d2d] text-white py-2 px-4 border border-transparent hover:bg-white hover:text-gray-600 hover:border-gray-600'>
                        <IoMdSend className='h-4 w-4 mr-3' />
                        Submit
                    </button>
                </span>
            </div>
        </SimpleModal>
    )
}

export default ModalContactForm
