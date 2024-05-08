# Job Advertisement Generator README

Welcome to the Tech Job Advertisement Generator! This tool is designed to assist HR professionals in creating effective relevant technical job advertisements quickly and efficiently.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The Job Advertisement Generator (JAG) is a tool developed to simplify the process of drafting job advertisements. It automates the generation of job descriptions based on user input, saving time and ensuring consistency in job postings.

![structure](https://github.com/Swan-Z/JobAdGenerator2/blob/main/RAG.png)

## Features

- **Customizable Templates**: JAG provides customizable templates for various job roles, allowing users to tailor job descriptions to their specific needs.
- **Keyword Suggestions**: The tool suggests relevant keywords based on the job title and description, optimizing the advertisement for search engines and candidate matching.
- **Preview Functionality**: Users can preview the generated job advertisement before finalizing and publishing it.
- **Export Options**: JAG supports exporting job advertisements in multiple formats (e.g., PDF, plain text) for easy sharing and distribution.

## Requirements

To use JAG, you'll need:
- Python 3.x
- Dependencies listed in `requirements.txt`

## Installation

1. Clone the repository: `git clone https://github.com/Swan-Z/JobAdGenerator.git`
2. Download Conda and activate it
3. Install dependencies: `pip install -r requirements.txt`
4. Introduce an OpenAI API key in demo/llamaService.py

## Usage

1. Run the backend: HackUPC2024/ `python main.py`
2. Run the frontend: Hackaton2024-front/ `ionic serve`
2. Follow the on-screen prompts to input job details and preferences.
3. Preview the generated job advertisement.
![webpage](https://github.com/Swan-Z/JobAdGenerator2/blob/main/interface1.png)
![webpage](https://github.com/Swan-Z/JobAdGenerator2/blob/main/interface2.png)

## Contributing

We welcome contributions from the community! If you'd like to contribute to the development of JAG, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
