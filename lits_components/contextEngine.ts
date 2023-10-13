import {ContextChatEngine, 
    ChatEngine, 
    PDFReader, 
    Document,
    serviceContextFromDefaults, 
    VectorStoreIndex} from "llamaindex"
//
//Export the chat engine
//
const getContextEngine = async () => {
        //
        //Get data / read it in
        //
        const reader = new PDFReader();

        const document = await reader.loadData(`${process.cwd()}/src/data/Microsoft_2022_Annual_Report.pdf`);
        
        //
        //Load it into a vectorIndex
        //
        const serviceContext = serviceContextFromDefaults({ chunkSize: 512 });

        //TODO: Explicitly declare everything so people know what they're doing



        //Switch out the vectorStoreIndex if you want to use a cloud-based vector store
        const index = await VectorStoreIndex.fromDocuments(document, {serviceContext});
        const retriever = index.asRetriever();
        retriever.similarityTopK = 5;

        //
        //Make a query engine
        //
        const chatEngine = new ContextChatEngine({retriever});

        return chatEngine;
}


export const ContextEngine = await getContextEngine();