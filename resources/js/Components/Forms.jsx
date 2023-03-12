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
    onSuccess: () => reset('name'),
  })
}

return (
  <form onSubmit={submit} className="flex flex-col w-3/12">

    <label htmlFor="name" className='dark:text-white'>name</label>
    <input id="name" type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
    {errors.name && <div className='text-red-600'>{errors.name}</div>}

    <label htmlFor="description" className='dark:text-white'>Description</label>
    <input id="description" type="text" value={data.description} onChange={e => setData('description', e.target.value)} />
    {errors.description && <div className='text-red-600'>{errors.description}</div>}

    <button type="submit" disabled={processing} className='dark:text-white dark:bg-slate-500 p-2 rounded mt-2 dark:hover:bg-slate-700'>Salva</button>
    {progress && (
      <progress value={progress.percentage} max="100">
        {progress.percentage}%
      </progress>
    )}
  </form>
)
}