#!/bin/bash
cd /home/kavia/workspace/code-generation/streamline-video-platform-3837/video_streamer_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

