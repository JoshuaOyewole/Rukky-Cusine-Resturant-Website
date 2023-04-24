import { Title } from "../Sections"


function Blog() {
  return (
    <section className="w-full my-5 xl:my-9 xl:px-16">
        <div className="w-full">
          <Title title="Recent Blog Post" />
          <div className="bg-containerbg mt-6 xl:mt-12 px-4  xl:px-8 py-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit autem vitae placeat dicta eos explicabo sunt nulla, facere debitis voluptatum aut in quae aperiam magni, illum dolore odit neque fuga consequuntur velit. Eligendi nobis nulla exercitationem repellat omnis sit?</p>
          </div>
        </div>
    </section>
  )
}

export default Blog