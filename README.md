# OnView

OnView is a web application that allows users to discover visually similar paintings from the Metropolitan Museum of Arts collection. The site provides similarity rankings based on the visual characteristics of the paintings using embeddings generated from the OpenAIs CLIP model. Each of the 2000+ paintings is currently on display at the MET and is available under Creative Commons Zero through the museum's Open Access Initiative.

![An example of the OnView interface showing visually similar images.](./example.png)

You can visit the OnView site at [onview.dev](https://onview.dev/).

## How It Works

The project uses embeddings from OpenAI's CLIP model to represent visual features as vector embeddings. It uses Cloudflares vector database Vectorize to store and compare artwork embeddings at the edge. The vector embeddings represent a way to decern visual similarities between images allowing the application to share similar artwork to each individual artwork. The site uses the following Cloudflare technologies: Workers, Hono, D1, and Vectorize.
