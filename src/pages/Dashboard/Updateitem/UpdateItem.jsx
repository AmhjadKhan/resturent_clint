import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpdateItem = () => {
    const { register, handleSubmit,reset} = useForm();
    const {name, cetegory, recipe, price} = useLoaderData();
    console.log(name,cetegory,recipe,price)
    const onSubmit = async (data) => {
        console.log(data)
        reset();
                Swal.fire({
                    position: "top-end",
                    icon: "error!",
                    title: 'sorry, people change ui than hide it',
                    showConfirmButton: false,
                    timer: 5000
                  });
    }
  return (
    <div>
    <SectionTitle heading="Update Item" subHeading="DEVELOPER CLOSE THIS SIDE" ></SectionTitle>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Recipe Name*</span>
                </label>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    defaultValue={name}
                    {...register('name', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select defaultValue={cetegory} {...register('category', { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default">Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>

                {/* price */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        defaultValue={price}
                        {...register('price', { required: true })}
                        className="input input-bordered w-full" />
                </div>

            </div>
            {/* recipe details */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Recipe Details</span>
                </label>
                <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>

            <div className="form-control w-full my-6">
                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

            <button className="btn">
                UpDate Item <FaUtensils className="ml-4"></FaUtensils>
            </button>
        </form>
    </div>
</div>
  )
}

export default UpdateItem
