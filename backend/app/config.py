import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()


class Settings:
    """
    Application configuration settings.
    """

    PROJECT_NAME = "InsightAI"
    API_VERSION = "1.0.0"
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


# Create a single settings object
settings = Settings()