interface iconInputs {
    className?: string,
    svg: React.FC<React.ComponentProps<"svg">>
}

export default function IconButton({className, svg: SvgComponent}: iconInputs) {
    return(
        <button className={"size-8 bg-gray-200 rounded-sm flex justify-center items-center " + className}>{<SvgComponent className="fill-gray-600 size-4"/>}</button>
    )
}