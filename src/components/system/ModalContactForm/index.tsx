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
            title="Contact"
        >
            <label>Nome</label>
            <input type='text' />
        </SimpleModal>
    )
}

export default ModalContactForm