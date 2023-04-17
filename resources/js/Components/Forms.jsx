import { useForm } from '@inertiajs/react'

export default function Form() {
const { data, setData, post, processing, errors, progress, reset } = useForm({
  name: '',
  description: '',
})

function submit(e) {
  e.preventDefault()
  post(route('products.store'), {
    data,
    preserveScroll: true,
    onSuccess: () => reset('name','description'),
  })
}

return (
  <form onSubmit={submit} className="flex flex-col w-3/12">

    <label htmlFor="name" className='dark:text-white'>name</label>
    <input id="name" type="text" className={errors.name && 'bg-orange-500'} value={data.name} onChange={e => setData('name', e.target.value)} />
    <div className={`text-red-600 h-6`}>{errors.name}</div>

    <label htmlFor="description" className='dark:text-white'>Description</label>
    <input id="description" type="text" className={errors.description && 'bg-orange-500'} value={data.description} onChange={e => setData('description', e.target.value)} />
    <div className='text-red-600 h-6'>{errors.description}</div>

    <button type="submit" disabled={processing} className='dark:text-white dark:bg-slate-500 p-2 rounded mt-2 dark:hover:bg-slate-700'>Salva</button>
    {progress && (
      <progress value={progress.percentage} max="100">
        {progress.percentage}%
      </progress>
    )}
  </form>
)
}