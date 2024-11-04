##✨ Inspiration  
The tech world can feel out of reach for individuals with physical disabilities that hinder traditional keyboard or mouse use. We were inspired by the desire to create a more accessible environment where anyone, regardless of physical limitations, can participate in software development. By leveraging AI-powered speech recognition and Intel AI PCs, we aim to remove barriers and make coding an inclusive activity for all.

## 🖥️ What It Does  
CodeWhisperer is a VSCode extension that transforms spoken words into code, enabling users to code hands-free. With CodeWhisperer, users can:
- **Voice-Activated Coding**: Simply speak what you want to implement, and CodeWhisperer converts your speech into text and generates the corresponding code using a Large Language Model (LLM).
- **Language Agnostic**: Supports a variety of programming languages, making it suitable for diverse coding tasks.
- **Filler Word Removal**: Automatically removes unnecessary filler words from spoken commands, ensuring clean and concise input for code generation.
- **Focus on Higher-Level Ideas**: By minimizing the emphasis on syntax, users can concentrate on their coding concepts and logic rather than getting bogged down by typing syntax.

## 🛠️ How We Built It  
We developed CodeWhisperer by integrating several key technologies:  
- **Speech-to-Text**: Advanced speech recognition software is employed to accurately capture and convert user commands into text. We are utilizing the QuartzNet 15x15 model for automatic speech recognition. This specific model is based on Jasper, a neural acoustic end-to-end architecture trained with Connectionist Temporal Classification (CTC) loss.
- **Large Language Models**: The transcribed text is processed through a Large Language Model (LLM) specifically trained to understand programming context and generate relevant code.  

### Tech Stack  
- **Front End**:  
  - **VSCode Extension**: Developed to provide a seamless integration with the coding environment.  
  - **TypeScript**: Used for type safety and improved code quality in our extension.  
- **Back End**:  
  - **Flask**: Serves as the web framework to handle requests and manage the application logic.  
  - **Gemini API**: Employed for code conversion, processing the transcribed text into functional code.  
  - **Intel AI PC**: Our backend server operates on an Intel AI PC, leveraging both CPU and NPU for enhanced performance.  
  - **Intel AI Tools**: We utilize OpenVINO for preprocessing, inference, and decoding tasks, optimizing the overall efficiency of the application.  

By leveraging these technologies, we ensured a robust and efficient system for transforming voice commands into executable code.

## ⚠️ Challenges We Ran Into  
One of the main challenges was ensuring the accuracy of both speech-to-text conversion and generating correct code from the LLM. We focused on model selection, prompt engineering, and postprocessing to clean and refine the LLM output, ensuring the generated code was precise and functional. Additionally, as this was our first time creating a VSCode extension, we had to learn its structure, API, and testing processes, which took time to master. We also faced difficulties with running the backend server on the AI PC separately from the user-facing side, ensuring seamless communication and smooth real-time operation.

## 🏆 Accomplishments That We're Proud Of  
We’re proud to have created a solution that makes coding more accessible through AI, breaking down barriers for those with physical limitations. The development of a fully functional VSCode extension that integrates voice commands for both code generation and navigation has significantly enhanced the overall user experience. Additionally, running CodeWhisperer on Intel AI PCs allows us to efficiently scale AI models, ensuring smooth performance and responsiveness throughout the coding process.

## 📚 What We Learned  
Throughout this project, we learned about the intricacies of developing AI-driven speech-to-code systems and the importance of optimization for real-time responsiveness. We also deepened our understanding of the VSCode extensions.

## 🚀 What's Next for CodeWhisperer  
In the future, we aim to:

- **Multi-File Projects**: Support for managing complex projects, such as creating a React App, using voice commands.  
- **Eye Tracking or Cursor Movement Commands**: Hands-free control through eye tracking or cursor movements.  
- **Enhance Speech Recognition**: Improve accuracy for various dialects and accents.  
- **Intelligent Suggestions**: Develop capabilities to assist users in debugging code through voice commands.  
