
export const getSampleData = (req, res)=> {
    try {

        const sampleData = [
            {
                "name": "joyal"
            },
            {
                "name": "Hakkim"
            }
        ];


        res.status(200).json({
            status: true,
            message: "Data Fetch Success",
            response: sampleData
        })

    } catch (error) {
        res.status(500).json({
            status: true,
            message: "Internal Server Error",
            response: error.message
        })
    }
}